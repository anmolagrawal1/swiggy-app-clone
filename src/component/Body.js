import RestaurantCard, { withOpenStatus } from "./RestaurantCard";
import restaurantList from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const [seardRestaurant, setSearchRestaurant] = useState([]);

  const [searchText, setSearchText] = useState(" ");

  const RestaurantActiveStatus = withOpenStatus(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(listOfRestaurant);
    setSearchRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfRestaurant);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" bg-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex p-4 m-4">
          <input
            className=" border-solid  border-black m-4 p-4"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-1 bg-green-300 m-4 rounded-lg"
            type="submit"
            onClick={() => {
              console.log(searchText);

              const searchList = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(searchList);

              setSearchRestaurant(searchList);
            }}
          >
            Search
          </button>
        </div>
        <div className="">
          <button
            className="filter px-2 py-1 bg-yellow-800 p-4 -m-28 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );

              setSearchRestaurant(filterList);
            }}
          >
            Filter
          </button>
        </div>
      </div>

      <div className="flex flex-wrap rounded-xl">
        {seardRestaurant.map((restaurant) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.availability.opened ? (
                <RestaurantActiveStatus {...restaurant.info} />
              ) : (
                <RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
