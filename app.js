import React from "react";
import ReactDOM from "react-dom";

//-------Navbar------//

const Navbar = () => {
    return (
        <div className="navbar_container"> 
            <div className="logo">
                <img alt="navbar logo" src = "https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"/>
            </div>

            <div className="nav_items">
                <ul>
                    <li>Home</li>
                    <li>AboutUS</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart_img">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7"/>
            </div>
            <div className="cart_body">
                <h3>pizza Hut</h3>
                <h4>pizzas</h4>
                <h4>3.4 start</h4>
                <h4>27 minutes</h4>
            </div>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search_box">
                <h2>Search</h2>
            </div>

            <div className="cart_container">
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
            </div>
        </div>
    )
}

const app = (
    <>
        <Navbar/>
        <Body/>
    </>
    
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

