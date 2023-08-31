import {Component} from "react";

class Testimonials extends Component{  // both react.component and this one is same.
 
    constructor(props){
        super(props);
        console.log(this.props.name + " child constructor");
        // this.state={
        //     count:0
        // }
    }
    componentDidMount(){
        console.log(this.props.name + " child didmount");
    }
    render(){
        const {name}= this.props;
        console.log(this.props.name + " child renderrrrr");

        return(
        <div>
            {/* <h1>Testimonials rendered {name} {this.state.count}</h1> */}
            <h1>Testimonials rendered {name}</h1>

            <button onClick={()=>{
                // this.setState({
                //     count : this.state.count + 1
                // })
            }}>Add count</button>
        </div>
            
        )
    }
}

export default Testimonials;