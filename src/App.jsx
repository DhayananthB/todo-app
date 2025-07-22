import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import TestFirebase from "./TestFirebase";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <TestFirebase/>
    </div>
  )
}
export default App;


