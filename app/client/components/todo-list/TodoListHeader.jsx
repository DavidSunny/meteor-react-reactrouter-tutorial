TodoListHeader = React.createClass({
  mixins: [ReactRouter.History],

  propTypes: {
    list: React.PropTypes.object.isRequired,
    tasksLoading: React.PropTypes.bool
  },

  contextTypes: {
    AppStore: React.PropTypes.func.isRequired
  },

  startedListTileEditingMode() {
    const payload = {
      editingMode: true,
      nameInputValue: this.props.list.name,
      inputRef: this.refs.nameInput
    };

    AppStore.call('STARTED_LIST_TITLE_EDITING_MODE', payload);
  },

  stopEditingTitle(e) {
    e.preventDefault();

    const payload = {
      listId: this.props.list._id,
      nameInputValue: this.context.AppStore().CHANGED_LIST_TITLE.nameInputValue
    };

    AppStore.call('UPDATE_LIST_TITLE', payload);
  },

  changedListTitle(e) {
    const payload = {
      nameInputValue: e.target.value
    };

    AppStore.call('CHANGED_LIST_TITLE', payload);
  },

  deleteList() {
    const errorMessages = {
      "not-logged-in": "Please sign in or create an account to make private lists.",
      "final-list-delete": "Sorry, you cannot delete the final public list!",
    };

    const message = `Are you sure you want to delete the list ${this.props.list.name}?`;

    if (confirm(message)) {
      Meteor.call("/lists/delete", this.props.list._id, (err, res) => {
        if (err) {
          alert(errorMessages[err.error]);
          return;
        }

        // 해당 리스트가 삭제되어, 첫번째 리스트로 리다이렉트
        this.history.pushState(null, "/");
      })
    }
  },

  toggleListPrivacy() {
    const errorMessages = {
      "not-logged-in": "Please sign in or create an account to make private lists.",
      "final-list-private": "Sorry, you cannot make the final public list private!",
    };

    Meteor.call("/lists/togglePrivate", this.props.list._id, (err, res) => {
      if (err) {
        alert(errorMessages[err.error]);
      }
    });
  },

  onSubmitNewTask(e) {
    e.preventDefault();

    const listId = this.props.list._id;
    const inputRef = ReactDOM.findDOMNode(this.refs.newTaskInput);
    const taskText = inputRef.value;

    // Don't do anything if the input is empty
    if (! taskText) {
      return;
    }

    const payload = {
      listId,
      taskText,
      inputRef
    };

    AppStore.call('SUBMIT_NEW_TASK', payload);
  },

  render() {
    const list = this.props.list;

    const newTaskForm = (
      <form className="todo-new input-symbol"
          onSubmit={ this.onSubmitNewTask }>
        <input type="text" name="text" ref="newTaskInput" placeholder="Type to add new tasks" />
        <span className="icon-add" />
      </form>
    );

    let nav;
    if (this.context.AppStore().CHANGED_LIST_TITLE.editingMode) {
      nav = (
        <nav>
          <form className="list-edit-form" onSubmit={ this.stopEditingTitle }>
            <input type="text" name="name"
              ref="nameInput"
              defaultValue={ list.name }
              onChange={ this.changedListTitle }
              onBlur={ this.stopEditingTitle } />
            <div className="nav-group right">
              <a className="nav-item">
                <span className="icon-close" title="Cancel" />
              </a>
            </div>
          </form>
          { newTaskForm }
        </nav>
      );
    } else if (list && ! this.props.tasksLoading) {
      nav = (
        <nav>
          <MenuOpenToggle />
          <h1 className="title-page" onClick={ this.startedListTileEditingMode }>
            <span className="title-wrapper">{ list.name }</span>
            <span className="count-list">{ list.incompleteCount }</span>
          </h1>
          <div className="nav-group right">
            <div className="nav-item options-mobile">
              <select className="list-edit">
                <option disabled>Select an action</option>
                { list.userId ?
                  <option value="public">Make Public</option> :
                  <option value="private">Make Private</option> }
                <option value="delete">Delete</option>
              </select>
              <span className="icon-cog"></span>
            </div>
            <div className="options-web">
              <a className="nav-item" onClick={ this.onToggleListPrivacy }>
                { list.userId ?
                    <span className="icon-lock" title="Make list public" /> :
                    <span className="icon-unlock" title="Make list private" /> }
              </a>
              <a className="nav-item" onClick={ this.deleteList }>
                <span className="icon-trash" title="Delete list"></span>
              </a>
            </div>
          </div>
          { newTaskForm }
        </nav>
      );
    } else if (list) {
      nav = (
        <nav>
          <div className="wrapper-message">
            <div className="title-message">Loading tasks...</div>
          </div>
        </nav>
      );
    }

    return nav;
  }
});
