import React,{Component} from  "react";
import axios from "axios"


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            userid : "",
            password : ""
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = e => {
        e.preventDefault();
        let props = this.props;
        console.log(props);
        //console.log(this.state);
        axios.post("https://localhost:5001/api/users/authenticate",{"Username":this.state.userid , "Password":this.state.password })
        .then(response => {
            if(response.data.loggedIn)
            {
                this.props.HandleSuccess(response.data);
            }
           // console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        const {userid,password} = this.state;
        let style = {
            marginLeft: '200px',
            marginTop:'50px'
        }
        
        return (
            <div>
                <form onSubmit = {this.submitHandler} style={style}>
                   
                    <label><b>Username</b></label><br/>
                    <input type="text" name="userid" placeholder="user id" value={userid} onChange = {this.changeHandler}/><br/>
                    
                    
                    <label><b>Password</b></label><br/>
                    <input type="password" name="password" placeholder="password" value = {password} onChange = {this.changeHandler}/><br/>
                    
                    <button type = "submit" style={{'marginTop':'10px'}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;