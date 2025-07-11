import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [color, setColor] = useState('olive')
  return(
    <div style={{background: color, color: "white" , width: "100%", height: "10000px"}}>
     <div style={{backgroundColor:"#000", color: "white", width: "100%", height: "50px", justifyContent: "center"}}>
    
    <button style={{backgroundColor:"red", borderRadius:"10px", border:"5px", color:"white"}} onClick={() => setColor('linear-gradient(to right, red, blue)')}>costom</button>
    
      <button  style={{backgroundColor:"red", borderRadius:"10px", border:"5px", color:"white"}} onClick={() => setColor('red')}>red</button>
      <button  style={{backgroundColor:"green", borderRadius:"10px", border:"5px", color:"white"}} onClick={() => setColor('green')}>green</button>
      <button style={{backgroundColor:"blue", borderRadius:"10px", border:"5px", color:"white"}} onClick={() => setColor('skyblue')}>blue</button>
      <button style={{backgroundColor:"brown", borderRadius:"10px", border:"5px", color:"white"}} onClick={() => setColor('brown')}>brown</button>
      <button style={{backgroundColor:"black", borderRadius:"10px", border:"5px", color:"white"}} onClick={() => setColor('black')}>black</button>
      <button style={{backgroundColor:"purple", borderRadius:"10px", border:"5px", color:"white"}} onClick={() => setColor('violet')}>random</button>
     </div>
    </div>
)

}

export default App
