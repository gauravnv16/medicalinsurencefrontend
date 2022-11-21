import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import '../../index.css';

export const LogInForm = () => {
    const navigate = useNavigate();
    const HandleLogin = (e) => {
        e.preventDefault();

        //loginLogic

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
        setIsCreated(true);
        navigate("/login",{state:{isCreated:true}});
        
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