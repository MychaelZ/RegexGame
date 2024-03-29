var React = require('react');
var Auth = require('../utils/auth.jsx');
var ViewActions = require('../actions/ViewActions');
var UserStore = require('../stores/UserStore');

module.exports = function (Component) {
  return React.createClass({
    getInitialState: function () {
      return UserStore.getState();
    },

    statics: {
      willTransitionTo: function (transition) {
        if(!UserStore.getState().loggedIn) {
          transition.redirect('/login', {}, {'nextPath' : transition.path});
        }
      }
    },

    onChange: function () {
      this.setState(UserStore.getState());
    },

    componentDidMount: function () {
      UserStore.addListener(this.onChange);
    },
    render: function () {
      return <Component {...this.props}/>
    }
  });
};