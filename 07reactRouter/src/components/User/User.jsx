import React from "react";
import { useParams } from "react-router-dom";
function User(){

    const {userid}=useParams();
return(
<div className="bg-amber-400 text-2xl rounded-2xl text-center"> User : {userid}</div>
);
}
export default User;