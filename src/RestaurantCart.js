import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
    const {resData} = props;
    const {name, 
           costForTwo,
           avgRating,
           cuisines,
           cloudinaryImageId } = resData?.data;
    return (
        <div className="cart">
            <div className="cart_img">
                <img src={CDN_URL+cloudinaryImageId}/>
            </div>
            <div className="cart_body">
                <h3>{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h4>₹{costForTwo/100} FOR TWO</h4>
                <h4>{avgRating} ratings</h4>
            </div>
        </div>
    )
}

export default RestaurantCart;