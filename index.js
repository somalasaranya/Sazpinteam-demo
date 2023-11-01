import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./LoginForm";
import App from "./App.js";





const AppLayout=()=>
{
    return(
        <div className="applayout">
            
           
        <LoginForm/>
        
       <App/>
            
        </div>
    )
}


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);