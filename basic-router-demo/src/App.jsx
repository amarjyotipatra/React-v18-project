import "./App.css";
import Home from "./Component/create.jsx"
import About from "./Component/About.jsx"
// import { useRoutes } from "react-router";
import {useSelector,useDispatch} from "react-redux";
import {createBrowserRouter,createRoutesFromElements,Route,Link,Outlet,RouterProvider} from "react-router-dom";
import {increment,decrement,reset} from "./Redux/Actions/index.js"
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";


 function App(props) {
  
  const router=createBrowserRouter(createRoutesFromElements(
    // <Route path="/" element={<Root />}>
    //    <Route index element={<Home />} />
    //    <Route path="/about" element={<About />} />
    // </Route>
  ))
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch();

  return (
  <div className="App"> 
      <RouterProvider router={router} />
      <hr/>
      <h3>Counter App</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())} style={{margin:'4px'}}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())} style={{margin:'4px'}}>Decrease</button>
    </div>
  )

  const Root=()=>{
    return(
      <>
      <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </div>
      <div>
        <Outlet />
        </div>
      </>
    )
  }  
}


export default App;
