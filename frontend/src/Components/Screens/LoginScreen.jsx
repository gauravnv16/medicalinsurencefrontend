import { useEffect } from "react";
import { useState } from "react"
import { useLocation } from "react-router-dom";
import { LogInForm } from "../PageComponent/Forms"
import { Loader } from "../PageComponent/Loader";

export const LoginScreen = () => {
    const [load,setLoad] = useState(false);

    const location = useLocation()
    // const { from } = location.state

    const close = () => {
        document.getElementById("modalBox").style.display = "none"
    }
    useEffect(() => {
        setTimeout(()=>{
            setLoad(true)
        },1000);
    })
    if(load)
    return (
        <>
        {
            (location.state != null &&location.state.isCreated == true)?<section className="modalg" id="modalBox">
                <h1>Account created Success Fully!!</h1>
                <span onClick={ close }> <i className="fa-solid fa-xmark"></i> </span>
            </section> : ""
        }
        <LogInForm/>
        </>
    )
    else 
    return <Loader/>
}
// https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif