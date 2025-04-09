import './App.css'
import { useState , useCallback  , useEffect, useRef} from 'react'


function App() {
  let [length , setlength] = useState(8) ; 
  let [numberStatus , setNumberStatus] = useState(true) ; 
  let [special , setSpecial]  = useState(false) ; 
  let [Password , setPassword] = useState("") ; 

  // useCallback(takes a function here , pass variables here ) ; 
  const copyPasswordToClip = useCallback(()=> {
    console.log("copied")
    PasswordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
    .then(() => {
      console.log("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
  } , [Password])

  const PasswordGenerator = useCallback(function(){
    let pass = "" ; 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
    if(numberStatus) str += "1234567890" ; 
    if(special) str+= "!*$@-_%"
    for (let i = 1  ; i < length ; i++){
      let char = Math.floor(Math.random() * str.length +1 ) ; 
      pass += str.charAt(char) ; 
    }
    setPassword(pass) ; 
      
1    
    }
   , [length , numberStatus , special , setPassword])

   useEffect(()=> {
    PasswordGenerator() ; 
   } , [length , numberStatus ,special ,PasswordGenerator])

   // using ref hook 
   const PasswordRef = useRef(null) ; 

 

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
     <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-300'>
      <input type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      // passing the refference for the useRef hook here 
      ref={PasswordRef}
      readOnly />
      <button 
  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
  onClick={copyPasswordToClip}
>
  Copy
</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-centre gap-x-1'>
        <input type="range"
        min = {6}
        max={32}
        value={length} 
        className='cursor-pointer'
        onChange={(e)=> {
          setlength(e.target.value)
        }}/>
        <label>Length : {length}</label>
        
      </div>
      <div>
        <input type="checkbox"
        defaultChecked = {true}
        id="numberInput"
        onChange={()=>{
          setNumberStatus((prev) => { return !prev}) ; 
        }} />
        <label>Number Input </label>
      </div>
      <div>
        <input type="checkbox"
        defaultChecked = {false}
        id="special"
        onChange={()=>{
          setSpecial((prev) => { return !prev}) ; 
        }} />
        <label>Special symbols </label>
      </div>
      
          
          
          
          
  
    </div>
     </div>
   
      
    </>
  )
}

export default App
