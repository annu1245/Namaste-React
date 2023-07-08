import RestaurantCart from "./RestaurantCart";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search_box">
                <h2>Search</h2>
            </div>

            <div className="cart_container">
              {resList.map((restorent) => (
                <RestaurantCart resData={restorent}/>
            ))}
            </div>
        </div>
    )
}

export default Body;