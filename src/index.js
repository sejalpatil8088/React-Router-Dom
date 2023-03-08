import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';





import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    
    children : [
      {
        path : "/Home",
        element : <Home />,
      },
      {
        path : "/AboutUs",
        element : <AboutUs />,
      },
      {
        path : "/ContactUs",
        element : <ContactUs />,
      }
    ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);


