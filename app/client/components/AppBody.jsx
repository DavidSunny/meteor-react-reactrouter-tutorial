Meteor.startup(function () {
  // initializing AppStore
  AppStore.call('AFTER_APP_START', { duration: 2000 });
  AppStore.call('TOGGLE_MENU_OPEN', { isMenuOpen: false });
  AppStore.call('APP_CONNECTION_STATUS');
  AppStore.call('STARTED_LIST_TITLE_EDITING_MODE', { editingMode: false });
});

// 이 컴포넌트는
// 1) 전역으로 필요한 데이터에 대한 구독,
// 2) 구독한 데이터 기반으로한 라우터 트랜지션,
// 3) 앱 레이아웃을 렌더링하는 것을 핸들링
AppBody = React.createClass({
  mixins: [ReactMeteorData],

  childContextTypes: {
    toggleMenuOpen: React.PropTypes.func.isRequired,
    AppStore: React.PropTypes.func.isRequired
  },

  getChildContext() {
    return {
      toggleMenuOpen: this.toggleMenuOpen,
      AppStore: this.AppStore
    }
  },
  toggleMenuOpen() {
    const payload = {
      isMenuOpen: ! this.data.AppStore.TOGGLE_MENU_OPEN.result
    };

    AppStore.call('TOGGLE_MENU_OPEN', payload);
  },

  AppStore() {
    return this.data.AppStore
  },

  getMeteorData() {
    const subHandles = [
      Meteor.subscribe("publicLists"),
      Meteor.subscribe("privateLists")
    ];

    const subsReady = _.all(subHandles, function (handle) {
      return handle.ready();
    });

    // Get the current routes from React Router
    const routes = this.props.routes;

    // If we are at the root route, and the subscrioptions are ready
    if (routes.length > 1 && !routes[1].path && subsReady) {
      // Redirect to the route for the first todo list
      this.props.history.replaceState(null, `/lists/${Lists.findOne()._id}`);
    }

    return {
      subsReady,
      lists: Lists.find({}, { sort: {createdAt: -1} }).fetch(),
      currentUser: Meteor.user(),

      AppStore: {
        SUBMIT_NEW_TASK: AppStore.get('SUBMIT_NEW_TASK'),
        CHANGE_CHECKBOX: AppStore.get('CHANGE_CHECKBOX'),
        DELETE_TODOS: AppStore.get('DELETE_TODOS'),
        RIGHT_BEFORE_PATH: AppStore.get('RIGHT_BEFORE_PATH'),
        AFTER_APP_START: AppStore.get('AFTER_APP_START'),
        APP_CONNECTION_STATUS: AppStore.get('APP_CONNECTION_STATUS'),
        TOGGLE_MENU_OPEN: AppStore.get('TOGGLE_MENU_OPEN'),
        ADD_LIST: AppStore.get('ADD_LIST'),
        CHANGED_LIST_TITLE: AppStore.get('CHANGED_LIST_TITLE'),
        STARTED_LIST_TITLE_EDITING_MODE: AppStore.get('STARTED_LIST_TITLE_EDITING_MODE')
      }
    };
  },

  addList() {
    const payload = {
      history: this.props.history
    };
    AppStore.call('ADD_LIST', payload);
  },

  getListId() {
    return this.props.params.listId;
  },

  renderConnectionIssueDialog() {
    const disconnected = this.data.AppStore.AFTER_APP_START.result
      && ! this.data.AppStore.APP_CONNECTION_STATUS.result;

    if (disconnected) return <ConnectionIssueDialog />;
    return null;
  },

  renderAppBodyContainerClass() {
    let appBodyContainerClass = "";

    if (Meteor.isCordova) {
      appBodyContainerClass += " cordova";
    }

    if (this.data.AppStore.TOGGLE_MENU_OPEN.result) {
      return appBodyContainerClass += " menu-open";
    }
  },

  renderChildren() {
    if (this.data.subsReady) {
      return this.props.children
    }
    return <AppLoading />
  },

  render() {
    console.log(JSON.stringify(this.data.AppStore, undefined, 4));
    
    return (
      <div id="container" className={ this.renderAppBodyContainerClass() }>
        {this.renderConnectionIssueDialog()}
        <LeftPanel currentUser={ this.data.currentUser }
                   lists={ this.data.lists }
                   onAddList={ this.addList }
                   activeListId={ this.getListId() } />
        <div onClick={ this.toggleMenuOpen }
             className="content-overlay"></div>
        <div id="content-container"> { this.renderChildren() } </div>
      </div>
    );
  }
});
