import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddNew from './Pages/AddNew.jsx';
import Update from './Pages/Update.jsx';
import Layout from './Layout/Layout.jsx';

const router = createBrowserRouter([
  {
   path:'/',
   element:<Layout/>,
   children:[
    {
      path: "/",
      element: <App/>,
      loader:()=>fetch('http://localhost:5000/chocolates')
    },
    {
      path:'/addchocolate',
      element:<AddNew/>
    },{
      path:'/update/:id',
      element:<Update/>,
      loader:({params})=>fetch(`http://localhost:5000/chocolates/${params.id}`)
    }
   ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
