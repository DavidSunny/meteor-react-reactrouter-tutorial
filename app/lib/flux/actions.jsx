// Actions for storing states
AppStore.methods({
  AFTER_APP_START: function(payload={}) {
    // 연결에러가 존재할때 error dialog를 보여줘야한다면 true로 변경
    // 우리는 앱이 막 시작중이고, 아직 연결이 되지 않았을 때는 연결 에러를 보여주지 않는다.
    const { duration } = payload;

    this.setState({
      AFTER_APP_START: {
        result: false
      }
    });

    // 오직 앱이 시작되고 지정한 시간 후에 연결에러 박스를 보여주기
    setTimeout(() => {
      this.setState({
        AFTER_APP_START: {
          result: true
        }
      });
    }, duration || 5000);
  },

  APP_CONNECTION_STATUS: function() {
    Tracker.autorun(() => {
      if (Meteor.status().connected) {
        this.setState({
          APP_CONNECTION_STATUS: {
            result: true
          }
        });
        return;
      }

      this.setState({
        APP_CONNECTION_STATUS: {
          result: false
        }
      });
    });
  },

  TOGGLE_MENU_OPEN: function(payload={}) {
    const { isMenuOpen } = payload;
    
    this.setState({
      TOGGLE_MENU_OPEN: {
        result: isMenuOpen
      }
    });
  },

  SUBMIT_NEW_TASK: function(payload={}) {
    const { listId, taskText, inputRef } = payload;

    // can access this.state and call this.setState()
    Meteor.call('SUBMIT_NEW_TASK', listId, taskText, (err, res) => {
      if (err) {
        alert("Failed to add new task.");
        this.setState({ SUBMIT_NEW_TASK: { result: false } });
        return;
      }

      this.setState({
        SUBMIT_NEW_TASK: {
          result: true,
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
        this.setState({ CHANGE_CHECKBOX: { result: false } });
        return;
      }

      this.setState({
        CHANGE_CHECKBOX: {
          result: true,
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
        this.setState({ DELETE_TODOS: { result: false } });
        return;
      }

      this.setState({
        DELETE_TODOS: {
          result: true,
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
        result: true,
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
    const { editingMode, nameInputValue, inputRef } = payload;
    
    console.log('payload: ', payload);
    
    this.setState({
      STARTED_LIST_TITLE_EDITING_MODE: {
        editingMode,
        nameInputValue
      }
    });

    if (inputRef) inputRef.focus();
  },

  UPDATE_LIST_TITLE: function(payload={}) {
    const { listId, nameInputValue } = payload;

    Meteor.call("/lists/updateName", listId, nameInputValue, (err, res) => {
      if (err) {
        this.setState({
          STARTED_LIST_TITLE_EDITING_MODE: {
            editingMode: true,
            nameInputValue: nameInputValue
          }
        });
        alert('리스트 제목 변경 실패');
        return;
      }
      this.setState({
        STARTED_LIST_TITLE_EDITING_MODE: {
          editingMode: false,
          nameInputValue: undefined
        }
      });
    });
  }

});

