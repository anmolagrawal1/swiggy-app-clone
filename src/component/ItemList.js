import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items }) => {

  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-black text-left  flex justify-between"
        >
          <div className=" w-8/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-4/12 p-4 m-2">
            <div className="absolute m-auto">
              <button
                className="p-2 w-16 bg-black text-white m-auto shadow-2xl"
                onClick={()=>handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              className=""
              src={CDN_URL + item.card.info.imageId}
              alt="Image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
