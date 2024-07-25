import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props)=>{
    const {restData} = props;

    const {name , avgRating ,cuisines, costForTwo, deliveryTime , cloudinaryImageId} = restData;


    return(
        
        <div className="res-card">
        
        <img className="image" src={CDN_URL + cloudinaryImageId}/>;
      
             <h3>{name}</h3> 
             <h4> {avgRating} Star</h4>
             <h4> {cuisines.join(",")}</h4>
             <h4> {costForTwo}</h4>
             {/* <h4> {deliveryTime} Minutes </h4>  */}
                <span></span>

         </div>
    )
};

export default RestaurantCard;