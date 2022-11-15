import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/App"
import EditNote from "../Components/EditNote"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "edit/:name",
      element: <EditNote />
    }
]);



export default router