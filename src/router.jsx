import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Tasks from "./components/Tasks";
import Register from "./components/Register";
import Login from "./components/Login";
import App from "./App";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/", element: (
                    <PrivateRoute>
                        <Tasks />
                    </PrivateRoute>)
            },
            {
                path: "/about", element: (
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>)
            }
        ]
    }, { path: "/login", element: <PublicRoute><Login /></PublicRoute> },
    { path: "/register", element: <PublicRoute><Register /> </PublicRoute> },
])
export default appRouter;