import RestaurantCard from "./RestaurantCard";  // here we we uses the Restaurant Card
import {useState} from "react";
import resList from "/utils/mockData";
 
const Body = () => {

const[listofRestaurant , setListofRestaurant ] = useState(resList);
  
return (
    <div className="body">
      <div className="Filter">
        <button className="filter-btn"
           onClick={() => {
            
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
                setListofRestaurant(filteredList);
          }}
                  
        >
          Top Rated Restaurant
          </button>  </div>
      <div className="res-conatiner">
          {listofRestaurant.map((restaurant) => (
           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
             ))}
       </div>
    </div>
  );
};

export default Body;