import RestaurantCart from "./RestaurantCart";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [listOfRestorent, setListOfRestorent] = useState(resList)
    return (
        <div className="body">
            <div className="search_box">
                <button
                    onClick={()=>{
                        const filteredList = listOfRestorent.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestorent(filteredList);
                    }}
                >
                High rating Restorents</button>
            </div>

            <div className="cart_container">
              {listOfRestorent.map((restorent) => (
                <RestaurantCart key={restorent.data.id}  resData={restorent}/>
            ))}
            </div>
        </div>
    )
}

export default Body;