// import { IMG_URL } from "../utilities/constant";

// const FoodCard= (props)=>{


//     return(
//     <div className="card">
//         <div className="crdImg-container">
//         <img className="card-img " src={IMG_URL + props.resData.info.cloudinaryImageId} />
//         </div>
//        <div className="resDetails">
//         <ul>
//             <li>{props.resData.info.name}</li>
//             <li>{props.resData.info.avgRating} Star</li>
//             <li>{props.resData.info.locality}</li>
//             <li>{props.resData.info.areaName}</li>
//         </ul>
//        </div>
//     </div>
//     );
// }

// export default FoodCard;

// ----creating  page  by using tailwind css and removed previous css and classes-----
import { IMG_URL } from "../utilities/constant";
import './Header.css';

const FoodCard = (props)=>{
    const cuisines= props.resData.info.cuisines;
    const newCuisines = cuisines.join(', ');



    return(
    <div class="w-52 shadow-xl rounded-lg m-4 hover:scale-105 ">
        <div >
        <img class="rounded-lg w-full h-1/2" src={IMG_URL + props.resData.info.cloudinaryImageId} />
        </div>
       <div >
        <ul class="m-3" >
            <li class="line-clamp-1">{props.resData.info.name}</li>
            <li class="text-sm font-light">{props.resData.info.avgRating} Star</li>
            <li class="line-clamp-2">{newCuisines}</li>
            <li class="text-sm font-light">{props.resData.info.areaName}</li>
        </ul>
       </div>
    </div>
    );

}

export const FoodCardWithOffer=(FC)=>{
    return (props)=>{
        return(
            <div className="relative">
                <h1 className="my_class">{props.resData.info.aggregatedDiscountInfoV3.header +' '+  props.resData.info.aggregatedDiscountInfoV3.subHeader}</h1>
                <FC resData={props.resData}/>
            </div>
        )
    }
}

export default FoodCard;