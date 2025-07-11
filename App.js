import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(15)
//  let counter = 15

 const addvalue = () => {
  console.log("clicked",counter);
  
// counter = counter +1
setCounter(counter + 1)
  
 }
 const removeValue = () => {
 if (counter == 0) {
 alert("never go down" + 1);
  
 }else{
    setCounter(counter-1)}
  
 }


return (
  <>
   <h1>code counter</h1>
  <h2 onClick={removeValue}>counter value: {counter}</h2>

  <button onClick={addvalue}>add value{counter}</button>
  <br></br>
  <button onClick={removeValue}>remove{counter} value</button>
  </>

)
}

export default App;
