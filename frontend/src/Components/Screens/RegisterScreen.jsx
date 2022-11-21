import { useEffect, useState } from "react";
import { RegisterForm } from "../PageComponent/Forms"
import { Loader } from "../PageComponent/Loader";

export const RegisterScreen = () => {
    const [load,setLoad] = useState(false);
    useEffect(() => {
        setTimeout(()=>{
            setLoad(true)
        },1000);
    })
    if(load)
    return (
        <>
        <RegisterForm/>
        </>
    )
    else 
    return <Loader/>
}