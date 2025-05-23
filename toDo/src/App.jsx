import { useState} from 'react'
import {TodoProvider} from './Contexts'
import './App.css'
import { useEffect } from 'react';
import TodoForm from './Components/TodoForms';
import TodoItem from './Components/TodoItems';


function App() {
  const [todos , setTodos] = useState([]) ; // intital array 
  // defining functinos 
  const addTodo = (todo/* the input from form */) => {

    // setTodos[todo] // deletes all previos responces overwites this one this is not idle 

    /* we need to convert the todo string to an object which we defined earlier in provider 
          {
              id : 
              todo : 
              completed : 
          }*/

    


    setTodos((prev) => [{id : Date.now() , ...todo}, ...prev]) // adds the new todo object to start 

  }

  // update function 

  const updatedTodo = (id , todo ) => {
    // loop on todos array in usestate 

    setTodos((prev) => (
      prev.map((prevTodo)=> (
        prevTodo.id === id ? todo : prevTodo
      ))
    ))
  }


  // delete 

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !==id ))
  }

  // update action 

  const toggleComplete = (id) => {
    setTodos((prev)=> (
      prev.map((prevTodo) => (
        prevTodo === id ? {...prevTodo , completed : !prevTodo.completed}  : prevTodo
      ))
    ))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos) ; 
    }
  } , [])
  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])


  return (
   <TodoProvider value={{todos ,addTodo , deleteTodo , updatedTodo , toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((todo) => (
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo = {todo} />

                              </div>
                            
                          ))
                        }
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
