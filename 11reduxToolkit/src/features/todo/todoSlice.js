import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[]
}

export const todoSlice=createSlice(
    {
        name:'todo',
        initialState,

        reducers:{
            addTodo:(state,action)=>{
                const todo={
                    id:nanoid(),
                    text:action.payload
                }
                state.todos.push(todo)
            },

            removeTodo:(state,action)=>{
                state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            },

        }

    }
)

export const{addTodo,removeTodo} =todoSlice.actions  // we are exporting this reducers so that individual components can access them

export default todoSlice.reducer
// - Redux Toolkit takes these reducer functions(addTodo,removeTodo) and automatically creates a single reducer function that combines them.
//- This combined reducer function is stored in todoSlice.reducer
