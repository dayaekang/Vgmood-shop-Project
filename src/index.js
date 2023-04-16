import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import Mycart from './pages/Mycart';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {path:"/",
   element:<App/>,
   errorElement: <NotFound/>,
   children:[
    {index:true, path: '/', element:<Home/>},
    {path:'/products', element:<AllProducts/>},
    {path:'/products/new', element:(
        <ProtectedRoute requireAdmin={true}>
          <NewProduct/>
        </ProtectedRoute>
    )},
    {path:'/products/:id', element:<ProductDetail/>},
    {path:'/carts', element:(
        <ProtectedRoute>
          <Mycart/>
        </ProtectedRoute>
    )},


   ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)