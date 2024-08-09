import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Layout from './Layout.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Github, {GithubInfoLoader}from './components/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         loader: {GithubInfoLoader},
//         path: "github",
//         element : <Github />
//       }
//     ]
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route 
      loader={GithubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
