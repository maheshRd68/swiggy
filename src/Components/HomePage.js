import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import About from "./About";



const HomePage = ()=>{
    return(<div class="bg-gray-200">
        <Header/>
        <Outlet/>
    </div>
        
    )
}
export default HomePage;
