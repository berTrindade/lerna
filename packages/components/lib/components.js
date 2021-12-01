import React from 'react'

const buttonStyle = {
  padding: '10px 20px'
};

const Button = ({ label }) => <button style={buttonStyle}>{label}</button>

export default Button;