import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./app/appStore";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {

  path:"/",
  element:<MainLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },

    {
      path:"/watch",
      element:<Watch/>
    },
  ],
},

]);


const App = () => {    
  return (
    <Provider store={store}>
     <RouterProvider router={appRouter}/>
    </Provider>
  );
};

export default App;
