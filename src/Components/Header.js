// import FoodLogo from "../../fileManager/images/FoodLogo.png";
// import './Header.css';
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Header=()=>{
//     [btnName,setBtnName]=useState("Login")
//     console.log("Header filtered");
// useEffect(()=>{
//     console.log("effect rendered");
// },[btnName])
//     return(
       
//         <div className="Header" style={{backgroundColor:"#f7a77f"}}>
//             <img src={FoodLogo} className="logo"/>
//             <div style={{display:"flex"}}>
//             <ul className="Nav">
//                 <li><Link to={'/'} >Home</Link></li>
//                 <li><Link to={'/About'} >About</Link></li>
//                 <li><Link to={'/Contact'} >Contact</Link></li>
//                 <li><Link to={'/BigMart'}>BigMart</Link></li>
//                 <li>Offers</li>
//                 <li>Help</li>
//             </ul>
//             <button style={{marginRight:"5px"}}onClick={()=>{
//                 btnName =="Login" ? setBtnName("Logout") : setBtnName("Login")
//             }} >{btnName}</button>
//             </div>
//         </div>
//     )
// }


// export default Header; 



import FoodLogo from "../../fileManager/images/FoodLogo.png";
import './Header.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    [btnName,setBtnName]=useState("Login")
    console.log("Header filtered");
useEffect(()=>{
    console.log("effect rendered");
},[btnName])
    return(
       
        <div className="flex items-center justify-around  h-20 p-2.5 -top-0 fixed w-full bg-blue-300 z-10">
            <img src={FoodLogo} className="w-20 rounded-full"/>
            <div className="flex">
            <ul className="flex w-96 justify-around items-center mr-4">
                <li className="hover:text-blue-500 hover:underline" ><Link to={'/'} >Home</Link></li>
                <li className="hover:text-blue-500 hover:underline"><Link to={'/About'} >About</Link></li>
                <li className="hover:text-blue-500 hover:underline"><Link to={'/Contact'} >Contact</Link></li>
                <li className="hover:text-blue-500 hover:underline"><Link to={'/BigMart'}>BigMart</Link></li>
                <li className="hover:text-blue-500 hover:underline">Offers</li>
                <li className="hover:text-blue-500 hover:underline">Help</li>
            </ul>
            <button className="bg-blue-500 text-white h-8 w-14 rounded-lg hover:text-blue-300" onClick={()=>{
                btnName =="Login" ? setBtnName("Logout") : setBtnName("Login")
            }} >{btnName}</button>
            </div>
        </div>
    )
}


export default Header; 

