import { useEffect, useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategoy from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resId
    );

    const json = await data.json();
    // console.log (json) ;
    setresInfo(json.data);
    //json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  };

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  let name,
    cuisines = [],
    costForTwoMessage,
    cloudinaryImageId,
    itemCards = [];
  if (resInfo) {
    let fullData = resInfo?.cards[0].card?.card?.info;
    name = fullData.name;
    cuisines = fullData.cuisines;
    costForTwoMessage = fullData.costForTwoMessage;
    cloudinaryImageId = fullData.cloudinaryImageId;
    itemCards =
      resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
        .itemCards || [];
  }

  //  const { itemCards } =
  //   resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
  //costForTwoMessage = 7;
  //   console.log(itemCards)

  const categories =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
       <img className="wx-6/12 m-auto" src={CDN_URL + cloudinaryImageId}></img>
      {/*<h2>
        {cuisines.join(" , ")} - {costForTwoMessage}
      </h2>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      {categories.map((category) => (
        <RestaurantCategoy key={category?.card?.card?.title} data={category?.card?.card} />
      ))}
    </div>
  );
      }

export default RestaurantMenu;
