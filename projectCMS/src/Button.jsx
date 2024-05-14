import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {
  return (
    <div>
        <button>{props.title}</button>
        {/* i<h1>{props.subTitle}</h1> */}
    </div>
    
  )
}
Button.defaultProps={
  title:"Default Props bata aako"
}

Button.propTypes={
   title: PropTypes.string.isRequired
}

export default Button