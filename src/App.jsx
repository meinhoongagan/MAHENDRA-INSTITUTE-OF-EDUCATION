import Nav from "./pages/Nav";
import Body from "./pages/Body";
// import Courses from "./Components/Courses";
import Footer from "./pages/Footer";
import HEader from "./pages/HEader";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="bg-zinc-50 text-center text-surface/75 dark:bg-gradient-to-r from-cyan-200 to-blue-200 dark:text-black/75 lg:text-left">
    <HEader/>
    <Nav/>
     <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
