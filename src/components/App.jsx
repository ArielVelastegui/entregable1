import { useState } from 'react'
import Quotebox from './Quotebox'
import '/src/App.css'
import quotes from '/src/json/quotes.json'
import Buttons from './Buttons'
import colors from '/src/json/colors.json'

function App() {
  const generateRandomNumber = arr=> {
    const indexRandom = Math.floor(arr.length*Math.random())  
      
    return arr[indexRandom]
  }
  const generateRandomColor = arr=> {
    const indexRandom = Math.floor(arr.length*Math.random())  
      
    return arr[indexRandom]
  }
  
 
  
  const [quote, setQuote] = useState(generateRandomNumber(quotes))
  const [color, setColor] = useState(generateRandomColor(colors))

  
  
  
  
  const Randie=()=>{
    setQuote(generateRandomNumber(quotes))
    setColor(generateRandomColor(colors))

}
const objStyle ={
  backgroundColor:color,
  color:color
}


  return (
    <div  style={objStyle} className="App">
      <section className='box' style={objStyle}>
      
      <Quotebox quote ={quote} color={color} />
      <Buttons Randie={Randie} color={color}/>
      </section>
    </div>
  )
}

export default App
