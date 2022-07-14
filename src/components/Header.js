import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({on_click,showAdd}) => {
  return (
    <header className='header'>
        <h1>Task Tracker App</h1>
        <Button on_click={on_click} color={showAdd ? "red":"green"} text={showAdd?'Close':'Add'}/>
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