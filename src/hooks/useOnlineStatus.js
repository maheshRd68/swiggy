import { useState } from "react"

const useOnlineStatus = ()=>{
 const [status,setstatus] = useState(true);

 window.addEventListener('online',()=>{
    setstatus(true);
 })

 window.addEventListener('offline',()=>{
    console.log("test");
    setstatus(false);
 })

    return status   // this to be pass into a body.
}

export default useOnlineStatus;