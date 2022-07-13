import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({on_click}) => {
  return (
    <header className='header'>
        <h1>Task Tracker App</h1>
        <Button on_click={on_click} color='green'/>
    </header>
  )
}

Header.defaultProps={
    name:'Brian'
}
Header.propTypes={
    name:PropTypes.string
}

export default Header