// import FoodCard from "./FoodCard";
// // import restaurents from "../utilities/resData";
// import { useEffect,useState } from "react";
// import { Srimmer } from "./Srimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../hooks/useOnlineStatus";

// const Body=()=>{
// let [res,setRestaurants]=useState([]);
// let [resCopy,setRestaurantsCopy]=useState([]);

// let [searchTerm,setSearchterm]=useState("");
// useEffect(()=>{

// //     // this is async method to fetch the data. initially outside console printed and then inside template print.
// // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((data)=>{
// //     return data.json();
// // }).then((resData)=>{
// //     console.log(resData);
// //     console.log("webla 2");
// // }).catch((err)=>{
// //     console.log(err);
// // })
// // console.log("maHesH");
// getRestaurantData();
// },[])

// const getRestaurantData= async ()=>{
//     let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//     let resData =await data.json();

//     setRestaurants(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setRestaurantsCopy(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// }

// // if(res.length == 0){
// //     return <Srimmer/>  // conditional method.
// // }

// //below one by using ternory operator.

//     // return res == undefined || resCopy == undefined || res.length == 0 ? <Srimmer/> :(
//         const onlineStatus = useOnlineStatus();
//         return !onlineStatus ? <h1>offline</h1>:(
//             // ---shrimmer not enabled---
            
//         <div>
//             <h2> All  Restaurents  In Vijayawada</h2>
//             <div style={{display:'flex'}}>
//                 <div style={{display:"flex", alignItems:"center"}}>
//                     <input placeholder="Enter filed Name" value={searchTerm} onChange={(e)=>{
//                         setSearchterm(e.target.value)
//                     }}></input>
//                     <button onClick={()=>{
//                         const searchData= res.filter((resData)=>{
//                             return resData.info.name.toLowerCase().includes(searchTerm.toLowerCase());
//                         })
//                         setRestaurantsCopy(searchData);
//                     }}>Find</button>
//                 </div>
//             <button type="button" className="btn"
//             onClick ={()=>{
//                 let filtered= res.filter((resData)=>{
//                     return resData.info.avgRating > 4.0;
//                 })
//                 setRestaurants(filtered);
//             }}
//             >Top Rated</button>
//             </div>

//             <div className="restaurant-list">
//                 {
//                     resCopy.map((resData,id)=>{
//                         return(
//                         <Link to={"/restaurants/" + resData.info.id}><FoodCard key={resData.info.id} resData={resData}/></Link>
//                     );
//                     })
//                 }
                
//             </div>
//         </div>
//     )
// }

// export default Body;


//----- Here using tailwind css by removing previous css-----
import FoodCard, { FoodCardWithOffer } from "./FoodCard";
// import restaurents from "../utilities/resData";
import { useEffect,useState } from "react";
import { Srimmer } from "./Srimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body=()=>{
let [res,setRestaurants]=useState([]);
let [resCopy,setRestaurantsCopy]=useState([]);

let [searchTerm,setSearchterm]=useState("");
const FoodCardOfferCompnt = FoodCardWithOffer(FoodCard);
useEffect(()=>{

//     // this is async method to fetch the data. initially outside console printed and then inside template print.
// fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((data)=>{
//     return data.json();
// }).then((resData)=>{
//     console.log(resData);
//     console.log("webla 2");
// }).catch((err)=>{
//     console.log(err);
// })
// console.log("maHesH");
getRestaurantData();
},[])

const getRestaurantData= async ()=>{
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    let resData =await data.json();

    setRestaurants(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantsCopy(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

// if(res.length == 0){
//     return <Srimmer/>  // conditional method.
// }

//below one by using ternory operator.

    // return res == undefined || resCopy == undefined || res.length == 0 ? <Srimmer/> :(
        const onlineStatus = useOnlineStatus();
        return !onlineStatus ? <h1>offline</h1>:(
            // ---shrimmer not enabled---
            
        <div className="mt-20 bg-gray-100">
            <h2 className="font-semibold p-3.5 "> All  Restaurents  In Vijayawada</h2>
            <div className="flex items-center">
                <div className="flex-wrap m-4">
                    <input placeholder="Type Here" value={searchTerm} onChange={(e)=>{
                        setSearchterm(e.target.value)
                    }}></input>
                    <button className="bg-blue-500 text-white h-6 w-14 rounded-r-md" onClick={()=>{
                        const searchData= res.filter((resData)=>{
                            return resData.info.name.toLowerCase().includes(searchTerm.toLowerCase());
                        })
                        setRestaurantsCopy(searchData);
                    }}>Find</button>
                </div>
            <button className="bg-blue-500 text-white h-6 w-24 rounded-sm"
            onClick ={()=>{
                let filtered= res.filter((resData)=>{
                    return resData.info.avgRating > 4.2;
                })
                setRestaurants(filtered);
            }}
            >Top Rated</button>
            </div>

            <div className="flex flex-wrap shadow-xl">
                {
                    resCopy.map((resData,Id)=>{
                        return <Link to={"/restaurants/" + resData.info.id}>
                            {
                                resData.info.aggregatedDiscountInfoV3.header ? <FoodCardOfferCompnt resData={resData}/>:
                                <FoodCard key={resData.info.Id} resData={resData}/>
                            }
                            </Link>
                    
                    })
                }
                
            </div>
        </div>
    )
}

export default Body;


