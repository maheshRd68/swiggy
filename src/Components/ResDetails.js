// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { RES_URL } from "../utilities/constant";

// const ResDetails =()=>{
//    const {resId}=(useParams());
//    const [menuItems,setMenuItems] = useState([]);
//     useEffect(()=>{
//        const getResDetails= async ()=>{
//         let data = await fetch(`${RES_URL}${resId}`)
//     let resdetails =await data.json();
//   setMenuItems(resdetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
//         }
//         getResDetails();
        
//     });


//     return(
//         <div className="resdetails-card">
//             <h1>Restaurant Name</h1>
//             <ol>menu
//                 {
//                     menuItems.map((item,i)=>{
                        
//                         return (
//                             console.log(item?.card?.info?.name),
//                              <li key={i}>{item?.card?.info?.name}</li>
//                              )
//                     })
//                 }

//             </ol>
//         </div>
//     )
// }


// export default ResDetails;



import { useParams } from "react-router-dom";
import useResDetails from "../hooks/useResDetails";
import { useEffect, useState } from "react";
import Menu from "./menu"; 


const ResDetails =()=>{
   const {resId}=useParams();
   const resData = useResDetails(resId);
   const [categoryList,setCategoryList] = useState([]);
//    console.log(resData);

useEffect(()=>{
    if(resData?.cards?.length > 0){
        const catlist= resData?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
            return (
        item?.card?.card['@type'] =='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
            )
           })
           console.log(catlist);
           setCategoryList(catlist);
       }
},[resData])
 
 
    return(
        resData?.cards?.length > 0 ?
        <div className="mt-20 ">
            <h1 className="font-bold text-xl text-center">{resData?.cards[0]?.card?.card?.info?.name}</h1>
            <h4 className=" text-lg text-center">{resData?.cards[0]?.card?.card?.info?.areaName}</h4>
                {categoryList.map((ctgyItems,id)=>{
                 
                        return (
                            <Menu key={id} categoryItems={ctgyItems}/>
                            
                        )
                })}

            {/* <ol>menu
                {
                    
                    resData.map((item)=>{
                        
                        return (
                             <li>{item.card.info.name}</li>
                             )
                    })
                }

            </ol> */}
        </div>
        : <h1>No Data Available</h1> 
    )
}


export default ResDetails;