import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
