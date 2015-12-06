TodoListPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // Get list ID from ReactRouter
    const listId = this.props.params.listId;

    // Subscribe to the tasks we need to render this component
    const tasksSubHandle = Meteor.subscribe("todos", listId);

    return {
      tasks: Todos.find({ listId: listId }, {sort: {createdAt : -1}}).fetch(),
      list: Lists.findOne({ _id: listId }),
      tasksLoading: ! tasksSubHandle.ready()
    };
  },

  componentWillUnmount() {
    AppStore.call('RESET_SUBMIT_NEW_TASK');
    AppStore.call('RESET_CHANGE_CHECKBOX');
    AppStore.call('RESET_DELETE_TODOS');

    // if you're a route component (this.props), otherwise (this.context)
    const payload = {
      pathname: this.props.location.pathname
    };
    AppStore.call('RIGHT_BEFORE_PATH', payload);
  },


  render() {
    const list = this.data.list;

    if (! list) {
      return <AppNotFound />;
    }

    return (
      <div className="page lists-show">
        <TodoListHeader
          list={list}
          showLoadingIndicator={this.data.tasksLoading} />

        <TodoListItems tasks={this.data.tasks} CHANGE_CHECKBOX={this.data.CHANGE_CHECKBOX} />
      </div>
    );
  }
});
