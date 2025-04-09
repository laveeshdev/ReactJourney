import { useState } from "react";
import tailwindcss from "tailwindcss";

function App() {
  const setBackground = function (color){
    return function(){
     setbg(color) ; 

    }
  }
// using state 

let  [bg , setbg]  = useState("white") ; 
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Main content */}
        <div className="flex-grow" style={{backgroundColor : bg}}></div>

        {/* Buttons at the bottom */}
        <div className="absolute bottom-0 w-full flex justify-center gap-4 p-4 bg-black rounded-full" >
          <button className="px-4 py-2 bg-red-500 text-white rounded"
          onClick= {setBackground("red")}>Red</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick= {setBackground("blue")}>Blue</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded"
          onClick= {setBackground("Green")}>Green</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick= {setBackground("yellow")}>Yellow</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick= {setBackground("purple")}>Purple</button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded"
          onClick= {setBackground("pink")}>Pink</button>
        </div>
      </div>
    </>
  );
}

export default App;
