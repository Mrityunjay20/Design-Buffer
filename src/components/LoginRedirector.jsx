import { Navigate, redirect } from "react-router-dom";

export default function LoginRedirector(){
    const test =  true;
    if(test){
        return <Navigate to='/login'/>
    }
    return (
        <>
        <h1>Hello</h1>
        </>
    )
}