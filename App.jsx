import { useState, useCallback} from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [ password, setpassword] = useState("")



  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let char = "abcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) char += "0123456789";
    if (charAllowed) char += "!@#$%^&*()_";

    for (let i = 1; index <length; i++) {
     let random = math.floor(math.random() * char.length + 1);
      pass = char.charAt(random)
    }
      setpassword(pass)
    
  }, [length, numberAllowed, charAllowed, setpassword])
 
  

return(
<>
<h1 style={{color:"white", marginLeft:"500px"}} >password generator</h1>
<div style={{backgroundColor:"grey" , height:"200px", borderRadius:"20px", width:"100%"}}>
  <div>
    <input
     type="text"
     value={password}
     style={{width:"80%", height:"50px", backgroundColor:"white", borderRadius:"20px"}}
     placeholder='password'
     readOnly
     />
     <button style={{background:"black", color:"white", borderRadius:"10px"}}>copy</button>
  </div>
  <div>
    <div>
      <input
       type="range" 
       min={5}
       max={20}
       value={length}
       className='curser-pointer'
       onChange={(e) => setLength(e.target.value)}
      />
      <label>length: {length}</label>
    </div>
    <div>
    <input
       type="checkbox" 
       defaultChecked={numberAllowed}
       id='numberInput'
      onChange={() => { setNumberAllowed((prev) => !prev)
     
      }}
      />
       <label htmlFor="numberinput">numbers</label>
    </div>
    <div>
    <input
       type="checkbox" 
       defaultChecked={charAllowed}
       id='numberInput'
      onChange={() => { setcharAllowed((prev) => !prev)
     
      }}
      />
       <label htmlFor="numberinput">charactors</label>
    </div>
  </div>
</div>
</>
)
}

export default App
