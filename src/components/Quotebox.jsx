import React from 'react'

const Quotebox = ({quote,color}) => {
const objStyle = {color:color}

  return (
    <article className='quoteBox'>
        
        <p style={objStyle}>{quote.quote}</p>
        <p className='auth' style={objStyle}>{quote.author}</p>
        
    </article>
  )
}

export default Quotebox