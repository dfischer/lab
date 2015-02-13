'use strict';

var React = require('react'),

    Mycomponent = React.createClass({
      propTypes: {
        isHovering: React.PropTypes.bool,
        style: React.PropTypes.object
      },

      getInitialState: function () {
        return {
          isHovering: false
        }
      },

      _hover: function () {
        this.setState({isHovering: true});
      },

      render: function() {
        return (
          <div className='Mycomponent' style={M(styles.default, this.state.isHovering && styles.hovering, this.props.style)} onMouseEnter={this._hover}>

            <div className="well">
              Well thats really nice of you and all...
              interesting
            </div>
          </div>
        )
      }
    });

var styles = {
  default: {
    border: '1px solid blue',
    borderRadius: 2
  },
  hovering: {
    borderColor: 'red',
    borderRadius: 10
  }
}

module.exports = Mycomponent;
