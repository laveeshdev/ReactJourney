import { useState } from "react";
function App() {
  // let count  = 15  ; 
  let [counter , setCounter] = useState(11)  ;
  // counter is a varible which holds the value to be modifiesd , can name it nanything a ,b , laveesh , value .... 
  // setCounter us the function which is used to set the valuse , can name it anything seta , changeLaveesh , function...
  // useState (11) sets the default variable value , here counter = 11 ; 

  const addValue  = () => {
    // console.log("value is added " , Math.random()) ; 
    if(counter+1>20) return ; 
    else {
      counter = counter+1 ; 
      setCounter(counter) ; 
    }

    // count += 1 ; 
    // console.log(count ) ; 
  }
  const subValue = () => {
    if(counter-1 < 0 ) return ; 
    else {
      counter -= 1 ; 
      setCounter(counter) ; 
    }

  }
  return (
    <>
    <h1>Counter : {counter}</h1>
    <button 
    onClick={addValue}>Increase</button>
    <button
    onClick={subValue}>Decrease</button>
    </>
  )
}

export default App
