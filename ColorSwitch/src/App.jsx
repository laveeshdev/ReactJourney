import tailwindcss from "tailwindcss";

function App() {
  const changeBackground = function (color){
    return function(){
      document.getElementById('body').style.backgroundColor = color ; 

    }
  }
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Main content */}
        <div className="flex-grow"></div>

        {/* Buttons at the bottom */}
        <div className="absolute bottom-0 w-full flex justify-center gap-4 p-4 bg-black rounded-full">
          <button className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={changeBackground("red")}>Red</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={changeBackground("blue")}>Blue</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={changeBackground("Green")}>Green</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={changeBackground("yellow")}>Yellow</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={changeBackground("purple")}>Purple</button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded"
          onClick={changeBackground("pink")}>Pink</button>
        </div>
      </div>
    </>
  );
}

export default App;
