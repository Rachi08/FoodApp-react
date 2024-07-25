import RestaurantCard from "./RestaurantCard";
// import restList from "../utils/mock_data";
import { useState, useEffect } from "react";





const Body = ()=>{

// useState to update ui
const[ listOfRestaurant , setListOfRestaurant] = useState([]);
console.log("🚀 ~ Body ~ listOfRestaurant:", listOfRestaurant)

const[searchText, setSearchText] = useState("")
const[filteredRestaurant, setFilteredRestaurant] = useState([])



useEffect(() => {
  // call api
   fetchData();

},[]);

 const fetchData = async () =>{
      const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const restaurant1 = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      


      const apiData = json.data.cards
      // for(let i=0 ; apiData.length>=i; i++){
      //   console.log(apiData[i])
      // }

      console.log("---------data from API---------",json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      
      setListOfRestaurant(restaurant1)
      setFilteredRestaurant(restaurant1)
 };

    return( 
    
    
    <div className="body">  

    



    <div className="btn">

    <div  className="filter">
    <input type="text" placeholder="search-box" className="search-box" value={searchText} 
      onChange={(e) =>{ setSearchText(e.target.value)}}
      
   /> 

    <button className="search"
    // filter restaurant by typing text
    // so we need search text
     onClick={() =>{
    const filteredRestaurant= listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
    
     );
   
    setListOfRestaurant(filteredRestaurant);
    //  console.log(searchText)
   }}
    >Search</button>
     </div>


   
   
    <button className="filter-btn"
    // filter logic
    onClick={()=> {
      const filterList = restList.filter((res)=>
        res.info.avgRating>=4.4
      );

       setListOfRestaurant(filterList);
       }}
    >  Top rated restaurant  </button>
    
    </div>
    <div className="restro-container">
    
    {filteredRestaurant?.map((item,i)=>{
     console.log(item)
     return <RestaurantCard key={"rachi"+i} restData={item.info}/>
    })
    }
  </div>
  </div>)
};

export default Body