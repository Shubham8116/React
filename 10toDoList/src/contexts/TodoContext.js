import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"",
        isCompleted:false
    }
    ],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}


})

export const TodoProvider=TodoContext.Provider

export default function useTodo()
{
    return useContext(TodoContext);
}