import React from "react";
import userContext from "./UserContext";
import { useState } from "react";
const UserContextProvider=({children}) => {
    const [user,setUser]=useState();
return(
    
    <userContext.Provider value={{user,setUser}}>
    {children}
    </userContext.Provider>
)
}

export default UserContextProvider;