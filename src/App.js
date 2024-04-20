import React from "react";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import CartPage from "./components/CartPage";
import { Provider } from "react-redux";
import appStore from "./components/redux/appStore";
// import LoginPage from "./components/LoginPage";

function App() {

  const appRouter = createBrowserRouter([
    // {
    //   path:"/",
    //   element:<LoginPage/>
    // },
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/cart",
      element:<CartPage/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantDetails/>
    }
  ])

  return (
    <Provider store={appStore}>
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    </Provider>
  );
}

export default App;
