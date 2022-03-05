import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
    )
}

// ? Default props
Button.defaultProps = {
    color: 'steelblue'
}

// ? Enforcing types 
Button.protoType = {
    text: PropTypes.string,
    color: PropTypes.string,
    // ? If we want to give a type to a method we can do it like this
    onClick: PropTypes.func.isRequired
}

export default Button