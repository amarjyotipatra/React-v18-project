// import { ReactDOM } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./Component/create.jsx";
import About from "./Component/About.jsx";

const routes = () => [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
];

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={Router} />
// );
export default routes;
