import { useEffect, useState } from "react";
import { RES_URL } from "../utilities/constant";

const useResDetails =(resId)=>{
    const [resData,setResData]= useState([]);

useEffect(()=>{
    const getResDetails= async ()=>{
     let data = await fetch(`${RES_URL}${resId}`)
 let resDetails =await data.json();
//  console.log(resDetails);
setResData(resDetails?.data)
     };
     getResDetails();
 },[]);
 return resData;
}

export default useResDetails;