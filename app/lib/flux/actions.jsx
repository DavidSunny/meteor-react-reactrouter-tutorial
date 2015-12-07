// Actions for storing states
AppStore.methods({
  SUBMIT_NEW_TASK: function(payload={}) {
    const { listId, taskText, inputRef } = payload;
    
    // can access this.state and call this.setState()
    Meteor.call('SUBMIT_NEW_TASK', listId, taskText, (err, res) => {
      if (err) {
        alert("Failed to add new task.");
        this.setState({ SUBMIT_NEW_TASK: { result: 'fail' } });
        return;
      }

      this.setState({
        SUBMIT_NEW_TASK: {
          result: 'success',
          payload: { listId, taskText }
        }
      });

      inputRef.value = '';
    });
  },
  RESET_SUBMIT_NEW_TASK: function() {
    this.setState({ SUBMIT_NEW_TASK: null });
  },

  CHANGE_CHECKBOX: function(payload={}) {
    const { taskId, checked } = payload;

    Meteor.call("CHANGE_CHECKBOX", taskId, checked, (err, res) => {
      if (err) {
        alert("Failed to change checked.");
        this.setState({ CHANGE_CHECKBOX: { result: 'fail' } });
        return;
      }

      this.setState({
        CHANGE_CHECKBOX: {
          result: 'success',
          payload
        }
      });
    });
  },

  RESET_CHANGE_CHECKBOX: function() {
    this.setState({ CHANGE_CHECKBOX: null });
  },

  DELETE_TODOS: function(payload={}) {
    const { taskId } = payload;
    Meteor.call("DELETE_TODOS", taskId, (err, res) => {
      if (err) {
        alert("Failed to delete todos.");
        this.setState({ DELETE_TODOS: { result: 'fail' } });
        return;
      }

      this.setState({
        DELETE_TODOS: {
          result: 'success',
          payload
        }
      });
    });
  },
  RESET_DELETE_TODOS: function() {
    this.setState({ DELETE_TODOS: null });
  },

  RIGHT_BEFORE_PATH: function(payload={}) {
    this.setState({
      RIGHT_BEFORE_PATH: {
        result: 'success',
        payload
      }
    });
  },

  RESET_RIGHT_BEFORE_PATH: function() {
    this.setState({
      RIGHT_BEFORE_PATH: null
    });
  },

  ADD_LIST: function(payload={}) {
    const { history } = payload;

    Meteor.call("ADD_LIST", (err, res) => {
      if (err) {
        this.setState({
          ADD_LIST: {
            result: false
          }
        });
        // 편의상 에러는 alert으로..
        alert("Error creating list.");
        return;
      }

      // 새로만든 리스트 페이지로 이동
      history.pushState(null, `/lists/${res}`);

      this.setState({
        ADD_LIST: {
          result: true,
          listId: res
        }
      });
    });
  },

  CHANGED_LIST_TITLE: function(payload={}) {
    const { nameInputValue } = payload;

    this.setState({
      CHANGED_LIST_TITLE: {
        nameInputValue
      }
    });
  },

  STARTED_LIST_TITLE_EDITING_MODE: function(payload={}) {
    const { editingMode, nameInputValue } = payload;
    
    console.log('STARTED_LIST_TITLE_EDITING_MODE payload: ', payload);
    
    this.setState({
      STARTED_LIST_TITLE_EDITING_MODE: {
        editingMode,
        nameInputValue
      }
    });
  },

  UPDATE_LIST_TITLE: function(payload={}) {
    const { listId, nameInputValue } = payload;

    Meteor.call("/lists/updateName", listId, nameInputValue, (err, res) => {
      if (err) {
        alert('리스트 제목 변경 실패');
        return;
      }
      this.setState({
        STARTED_LIST_TITLE_EDITING_MODE: {
          editingMode: false,
          nameInputValue: nameInputValue
        }
      });

      this.setState({
        CHANGED_LIST_TITLE: {
          nameInputValue: undefined
        }
      });
    });
  }
});

