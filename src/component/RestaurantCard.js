  import { CDN_URL } from "../utils/constants";
  
  const RestaurantCard = 
({
   cloudinaryImageId,
   name,
   cuisines,
   areaName,
   slaString,
   costForTwo,
   avgRating,
   sla,
 }) => {
   return(
      <div className="m-4 p-4 w-[250px] overflow-x-scroll overflow-y-hidden bg-yellow-50 rounded-xl border-solid border-blue-400 shadow-2xl hover:bg-yellow-100 cursor-pointer">
         <img className="resLogo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold py-4">{name}</h2>
      <p>{cuisines.join(",")}</p>
      <h4>{areaName}</h4>
      <span>
        <h4 >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{sla?.slaString}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
   )
}

// High order Component

export const withOpenStatus = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <lable className="absolute bg-black text-white p-2 m-2 rounded-lg"> Open </lable>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;