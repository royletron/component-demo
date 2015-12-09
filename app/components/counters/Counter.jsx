var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions/CounterActions.jsx');
var Store = require('../../stores/CounterStore.jsx');
var Button = require('../global/Button.jsx');

var obj = {blah: "blah"}
var empty = {}
var new_pobj = new Object();

module.exports = React.createClass({
  mixins: [Reflux.connect(Store, "count")],
  onIncrement: function(){
    if(this.props.ignoreState)
      this.setState({count: this.state.count+1});
    else
      Actions.increment();
  },
  onDecrement: function(){
    if(this.props.ignoreState)
      this.setState({count: this.state.count-1});
    else
      Actions.decrement();
  },
  render: function() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <Button label="+" onClick={this.onIncrement} />
        <Button label="-" onClick={this.onDecrement} />
      </div>
    );
  }
})
