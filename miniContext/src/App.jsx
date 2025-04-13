
import './App.css'
import Profile from './components/Profile'
import Login from './components/login'
import UserContextProvider from './Context/UserContextProvider'

function App() {



  return (
    <UserContextProvider>
    <h1>React Context api </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
