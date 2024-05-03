import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Cart from "./component/Cart";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";




const AppLayout = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
       <React.Fragment>
      <Header />
      <Outlet/>
      <Footer/>
      </React.Fragment>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children: [
      {
        path : "/",
        element : <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/cart",
        element: <Cart/>

      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
