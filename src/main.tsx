import axios from 'axios';
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Page404 } from './Pages/404';
import { HomePage } from './Pages/HomePage';

// axios config
axios.defaults.baseURL = 'https://protected-cove-39945.herokuapp.com/';

// routes
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <Page404 /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
