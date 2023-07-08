import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Body from "./Body";


const AppLayout = () => {
    return (
        <div className="applayout">
            <Navbar/> 
            <Body/>
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
