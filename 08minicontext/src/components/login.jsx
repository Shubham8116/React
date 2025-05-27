import React,{useState,useContext} from "react";
import userContext from "../context/UserContext";

function Login()
{
    const[username,setUsername]=useState(null);
    const[password,setPassword]=useState(null);
    
    const {setUser}=useContext(userContext);

   const submitHandle=(e)=> 
    {
            e.preventDefault();
            setUser({username,password})

   }

return(
<div> 
    <h1>Login Info</h1>
    <input type="text" placeholder="username"
    value={username} onChange={(e)=>setUsername(e.target.value)}/>
    {" "}
    <input type="text" placeholder="password"
    value={password} onChange={(e)=>setPassword(e.target.value)}/>
    {" "}
    <button onClick={submitHandle}>submit</button>


</div>
);
}
export default Login;