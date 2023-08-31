import React, { lazy,Suspense } from "react";
import ReactDOM  from "react-dom/client";
import HomePage from "./Components/HomePage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";
import Body from "./Components/Body";
import ResDetails from "./Components/ResDetails";

// console.log(document.createElement('h1'));
// var divElement = React.createElement('div',{id:"parent"},'hello everyOne');
// [React.createElement('div',{id:'child1'},
// React.createElement('h1',{id:'grand-child1'},'hello maheshaa')),
// React.createElement('div',{id:'child2'},
// React.createElement('h1',{id:'grand-child2'},'hello mahesh'))]);

const BigMart = lazy(()=> import ("./Components/BigMart"))
const About = lazy(()=> import ("./Components/About"))
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
        errorElement:<ErrorPage/>,
        children:[{
            path:"/",
        element:<Body/>,
        },{
            path:"/About",
            element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
        },
        {
            path:"/Contact",
            element:<Contact/>
        },{
            path:"/restaurants/:resId",
            element:<ResDetails/>
        },
        {
            path:"/bigMart",
            element:<Suspense fallback={<h1>Loading...</h1>}><BigMart/></Suspense>
        }

        ]
        
    }
    
]);
const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HomePage/>);  ///whenever use router provider then  no need to specify Component.
root.render(<RouterProvider router={appRouter}/>)





