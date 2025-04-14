import { createContext , useContext} from "react";

export const TodoContext = createContext({
    todos: [//all the added todos objects
        {
            id: 1 , 
            todo: "To-do Msg" ,
            completed : false , 

        } // default addded sample task 
    ] ,
    // now we add functions 
    addTodo : (todo) => {} ,  // just defined a funciton which takes a string todo input which add it to thelist 
    updatedTodo : (id, todo) => {} , // update the toDo
    deleteTodo : (id) => {} , 
    toggleComplete : (id) => {} // complete incomplet 
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}


export const TodoProvider  = TodoContext.Provider