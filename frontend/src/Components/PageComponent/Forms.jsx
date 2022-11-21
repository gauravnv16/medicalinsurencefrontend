import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { config } from 'dotenv';
import '../../index.css';
import { API_URL } from "../../../API";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../Actions/LoginAction";
import { LoggedUser } from "../../Actions/LoggedUser";

export const LogInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const HandleLogin = (e) => {
        e.preventDefault();
                
        let uobj= {
            uname:e.target.uname.value,
            pass:e.target.pass.value
        }  

        if(uobj.uname != '' && uobj.pass !='')
        axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${API_URL}api/login`,
            params: uobj
        }).then((data) => {
            console.log(data.data[0]);
            dispatch(LoggedUser(data.data[0]))
            dispatch(LoginAction());
        });


        navigate("/user/profile");
    }
    return(
        <div className="container">
        <form className="loginform" onSubmit={ HandleLogin }>
            <h1> Log In</h1>
            <input type="text" name="uname" placeholder="Username.."></input>
            <input type="password" name="pass" placeholder="Password.."></input><br></br>
            <button>Submit</button><br></br>
            <p>Or</p>
            <button>New User? <Link to="/register" style={{textDecoration:"underline"}}>register</Link></button>
        </form>
        </div>
    )
}

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [isCreated,setIsCreated] = useState(false);
    const HandleRegister = (e) => {
        e.preventDefault();

        //registerlogic
        
        let uobj= {
            uname:e.target.uname.value,
            email:e.target.email.value,
            pass:e.target.pass.value
        }  

        if(uobj.uname != '' && uobj.pass !='' && uobj.email !='') 
        axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${API_URL}api/register`,
            params: uobj
        });
        setIsCreated(true);
        navigate("/login",{state:{isCreated:true}});
        console.log(uobj)
    }
    return(
        <div className="container">
            <form className="loginform" onSubmit={ HandleRegister }>
                <h1>Register</h1>
                <input type="text" name="uname" placeholder="Username.."></input>
                <input type="email" name="email" placeholder="Email.."></input>
                <input type="password" name="pass" placeholder="Password.."></input><br></br>
                <button>Submit</button><br></br>
                <p stlye={{margin:"100px"}}>Or</p>
                <button>Already a User? 
                    <Link to={{
                        pathname:"/login",
                        state:"hello",
                        
                        }} 
                    state={{name:"gaurav",isCreated:isCreated}}
                    style={{textDecoration:"underline"}}>login</Link>
                </button>
            </form>
        </div>
    )
}