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

      _hoverEnter: function () {
        this.setState({isHovering: true});
      },

      _hoverLeave: function () {
        this.setState({isHovering: false});
      },

      render: function() {
        var results = 10000;
        return (
          <div class="flow">
            <div className='Mycomponent'
                 style={M(styles.default, this.state.isHovering && styles.hovering, this.props.style)}
                 onMouseEnter={this._hoverEnter}
                 onMouseLeave={this._hoverLeave} >
              <div className="well">
                <p>
                  Well thats really nice of you and all...
                  interesting
                </p>
              </div>
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
