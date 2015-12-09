var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/CounterActions.jsx');

module.exports = Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  counter: 0,
  getInitialState: function() {
    return this.counter
  },
  onIncrement: function(){
    console.log('Store says increment');
    this.counter++;
    this.trigger(this.counter);
  },
  onDecrement: function(){
    console.log('Store says decrement');
    this.counter--;
    this.trigger(this.counter);
  }
})
