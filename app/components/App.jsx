var React = require('react');
var Counter = require('./counters/Counter.jsx');
var Reflux = require('reflux');
var Store = require('../stores/CounterStore.jsx');

require('./App.css');

module.exports = React.createClass({
  mixins: [Reflux.connect(Store, "count")],
  render: function(){
    return (
      <div className="app-main-div">
        <h1>Our web app</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter ignoreState />
        <Counter />
        <h3>counters: {this.state.count}</h3>
      </div>
    );
  }
});
