import './App.css'
import './components/Card'
import Card from './components/Card'

function App() {
  const myArr = [1,2,3,4] ; 

  return (
    <>
    <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4 '>Tailwind CSS is working !</h1>
    
    <Card/> 
    <Card name="laveesh" someData = {myArr}/>
    
    
    </>
  )
}

export default App
