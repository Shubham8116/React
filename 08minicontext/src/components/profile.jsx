import React,{useState,useContext} from "react";
import userContext from "../context/UserContext";

function Profile()
{
    const {user}=useContext(userContext);

    if(!user)
        return <div>Please Login</div>
    return <div>Welcome, Hello {user.username} your password is: {user.password}</div>

}
export default Profile;