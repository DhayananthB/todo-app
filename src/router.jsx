import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Tasks from "./components/Tasks";
import App from "./App";

const appRouter = createBrowserRouter([
    {
        path: "/todo-app",
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Tasks /> },
            { path: "about", element: <About /> }
        ]
    }
])
export default appRouter;