
// // const About=(()=>{
// //     return(
// //         <h2>About</h2>
// //     )
// // })
// const About =((props)=>{
//     console.log(props);
//     return(
//         <div>About {props.name}</div>
//     )
// })

// export default About;

import React from "react";
import Testimonials from "./Testimonials";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
        this.state={
            users:[],
            test:"mahesh"
        }
    }

    // async must be use before componentDidMount to fetch the data.

     async componentDidMount(){ 
        console.log("did mount");
        let usersData = await fetch("https://api.github.com/users");
    let setUsersData = await usersData.json();
    this.setState({
        users:setUsersData
    })
    }
    componentDidUpdate(){
        console.log("cmp updated");
    }
    componentWillUnmount(){
        console.log("unmounted");
    }
    render(){
        console.log("parent renderrr");

        // const {name}=this.props;
        return <div>
            <h1>{this.state.users}</h1>
            
        {/* <Testimonials name="mahi"/>
        <Testimonials name="mahidhar"/> */}
        <ul>
            {this.state.users.map((user)=>{
                return <li>{user.login}</li>
            })}
        </ul>
     

            </div>
           
    }
}

export default About;