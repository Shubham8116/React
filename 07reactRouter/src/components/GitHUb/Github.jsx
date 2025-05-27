import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github()
{
    const data=useLoaderData();
//     const [data,setData]=useState([]);
// useEffect(()=>{
//     fetch('https://api.github.com/users/Shubham8116')
//     .then(Response=>Response.json())
//     .then(Response=>setData(Response))
// }

// ,[])

    return(

        <div className="text-amber-50 text-center bg-black text-3xl "> 
        GitHub Followers : {data.followers}
        </div>
    );
}
export default Github;

// following code is for loader
export const gitHubInfoLoader=async ()=>{
const response= await fetch('https://api.github.com/users/Shubham8116')
return response.json();
}