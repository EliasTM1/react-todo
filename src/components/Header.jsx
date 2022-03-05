import React from 'react'
import PropTypes from 'prop-types'
// * Components
import Button from './Button';


const Header = (props) => {
    const onClick = () => {
        console.log('P O L L O S')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button
                color='green'
                text='Hola'
                onClick={onClick}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
