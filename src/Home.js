import React,{Component} from  "react";
import Login from "./Components/auth/login";

class Home extends Component {
    constructor(props){
        super(props);

       //this.HandleSuccess = this.HandleSuccess.bind(this);


    }

    HandleSuccess = (data) => {
        console.log(data);
        this.props.handleData(data);
        this.props.history.push("/calculatePrice")
    }


    render(){
        return (
            <div>
                {/* <h1>status: {this.props.LoggegIn}</h1> */}
                <Login HandleSuccess = {this.HandleSuccess}/>
            </div>
        )
    }
}

export default Home;