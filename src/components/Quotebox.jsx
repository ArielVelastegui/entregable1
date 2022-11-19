import React from 'react'
import Buttons from './Buttons'

const Quotebox = ({quote,color,Randie}) => {
const objStyle = {color:color}

  return (
    <article className='quoteBox'>
        
        <p style={objStyle}><img src="public/feather.png" alt="pluma" />{quote.quote}</p>
        <h1 className='auth' style={objStyle}>{quote.author}</h1>
        <Buttons Randie={Randie} color={color}/>
    </article>
  )
}

export default Quotebox