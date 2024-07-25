import { useEffect } from "react";


const RestaurantMenu = () => {

  useEffect(() =>{
     fetchMenu();
  },[])


  const fetchMenu =  async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=326440&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();

    console.log(json);
  }


    return(
       <div>
       <h1>Burger</h1>
       </div>
    )
};



export default RestaurantMenu;

// Rachi comment

// Nishant comment