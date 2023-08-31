
import { useRouteError } from "react-router-dom";
const ErrorPage =(()=>{
    let{status,statusText} = useRouteError();

    return(
<div>
        <h2>{status}</h2>
        <h2>{statusText}</h2>
</div>

    )
})

export default ErrorPage;