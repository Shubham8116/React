
import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo}, ...prev])

  }

  // In the below function we have used map. The map is used to modify values and return new array(original array is intact). It will iterate over all todos and if matching id found then it will replace with todo else it will keep as same as prevValue.
  // Then this new modified array will be passed to the setTodos() method.
  const updateTodo=(id,todo)=>{
    setTodos(
            (prev)=> prev.map(
                     (prevValue)=>(prevValue.id===id?todo:prevValue))
            )
  }

  // Similarly, like above functionality , below we have used filter that returns true or false based on condition given and generates new array.
  // Then this new array will be passed to setTodos.
  const deleteTodo=(id)=>{
   setTodos((prev)=>prev.filter((prevValue)=>prevValue.id!==id))
  }

  // Here we are using spread operator example-
 // const person = { name: "Alice", age: 25 };
 //const newPerson = { ...person, age: 26 }; // Copy and update age


  const toggleComplete=(id)=>{
    setTodos(
      (prev)=>prev.map(
        (prevValue)=>prevValue.id===id? {...prevValue, completed:!prevValue.completed}: prevValue))
  }


  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length>0)
    {
      setTodos(todos);
    }

  },[])  // this useEffect will run only one time when the components mounts, to pull todos if there are any stored in localStorage. 


  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])   // whenever we we add todos or change todos this useEffect will be called. 

  // localStorage only uses string values therefore we have used JSON conversion methods.

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todo's</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                              <div key={todo.id} // sometimes todo are same to differentiate them we have used key for looping. 
                              className='w-full'>
                                <TodoItem todo={todo} />

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
