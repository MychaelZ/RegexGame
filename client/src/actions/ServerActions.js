var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../Constants').ActionTypes;

var ServerActions = {
  questionsLoaded: function (questions) {
    Dispatcher.dispatch({
      type: ActionTypes.QUESTIONS_LOADED,
      questions: questions
    });
  },

  solutionsLoaded: function (solutions) {
    Dispatcher.dispatch({
      type: ActionTypes.SOLUTIONS_LOADED,
      solutions: solutions
    });
  },

  usersLoaded: function (users) {
    Dispatcher.dispatch({
      type: ActionTypes.USERS_LOADED,
      users: users
    });
  }
};

module.exports = ServerActions;