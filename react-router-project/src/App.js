
// import './App.css';

import { Route, Link, RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import Home from './components/Home'
import Data from "./components/Data";
import Contact from "./components/Contact";
import { createRoutesFromElements } from "react-router-dom";


function App() {

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}> 
    <Route index element={<Home/>}/> 
    <Route path='/data' element={<Data/>}/> 
    <Route path='/contact' element={<Contact/>}/> 
    </Route>
  )
)

  return (
    <div className="App">
    <RouterProvider   router={router} />
    </div>
  );
}

export default App;


const Root = () => {
  return(
    <> 
    <div>
    <Link to='/'>Home</Link>
    <Link to='/data'>Data</Link>
    <Link to='/contact'>Contact</Link>
    </div>

   <div><Outlet/></div>
 
    </>
  ) 

}