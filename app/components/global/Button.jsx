var React = require('react');

require('./Button.css');

var Button = module.exports = React.createClass({
  onClick: function(event){
    if(this.props.onClick)
      this.props.onClick(event);
    else
      console.log('You have not sent an onClick prop')
  },
  render: function(){
    return(
      <a onClick={this.onClick} className="global-button-container">
        {this.props.label}
      </a>
    );
  }
})
