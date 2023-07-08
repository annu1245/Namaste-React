import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
    return (
        <div className="navbar_container"> 
            <div className="logo">
                <img alt="navbar logo" src = {LOGO_URL}/>
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

export default Navbar;