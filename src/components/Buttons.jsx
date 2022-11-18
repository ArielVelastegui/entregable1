import React from 'react'

const Buttons = ({Randie,color}) => {
    const objStyle = {backgroundColor:color}
  return (
    <button style={objStyle} onClick={Randie}>
        Random
    </button>
  )
}

export default Buttons