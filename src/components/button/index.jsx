import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './button.css'

export class Button extends Component {
  render() {
    const {type, name, disabled, onClick, children} = this.props
    return (
      <button
        className="btn"
        type={type}
        name={name}
        disabled={disabled}
        onClick={onClick}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
}

