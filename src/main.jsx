import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ListedBook from './components/ListedBook/ListedBook.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "listedBooks",
        element:<ListedBook></ListedBook>
      },
      {
        path:"pageRead",
        element: <PagesRead></PagesRead>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
