import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Custbuttons from "../components/UiComponents/CustButtons";
import InputField from "../components/UiComponents/InputField";
import { supabase } from "../utils/Supabase";
import "./LoginPage.css";
import frameImg from '../assets/Frame1.webp'



export default function LoginPage() {
  const [loginState, setLoginState] = useState(true);
  const [loginData, setLoginData] = useState(false)
  const nameRef =  useRef();
  const emailRef =  useRef();
  const passwordRef =  useRef();

   
  function toggle() {
    setLoginState((loginState) => !loginState);
    clearData();
    
  }
  async function createAccount(){
    const { data, error } = await supabase.auth.signUp({
        email: `${emailRef.current.value}`,
        password: `${passwordRef.current.value}`,
    });
    localStorage.setItem('session', data.session);
    console.log("data is" + data,"error is" + error);
    clearData();
  }


async function login(){
    if(emailRef.current.value != "" && passwordRef.current.value != "" ){
        alert("hello")

    }else{
        alert("bye")
    }
    
  }
  if(loginData){
    return <Navigate to ={`/dashboard/${localStorage.getItem("email")}`}/>;
  }
  

  function clearData(){
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  


  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className=" flex w-2/3 mx-auto p-6 text-white bg-gray-900 border border-gray-900 rounded-lg shadow">
          <div className="w-3/5 start-0 p-0">
            <img src={frameImg} className="h-max bg-cover p-0 rounded-lg" />
          </div>
          <div className="w-2/5 end-0 text-center items-center">
            {loginState ? <div className="flex-col">
                <h1 className="text-xl font-medium my-4">Sign Up to <span className="font-cavet text-3xl">designBuffer</span></h1>
                <InputField  field="Email" ref={emailRef}/>
                <InputField  field="Password" ref={passwordRef}/>
                <Custbuttons text={"Sign in"} callbackFunction={createAccount}/>
            </div>
             : 
             <div className="flex-col">
            <h1 className="text-xl font-medium my-4">Login to <span className="font-cavet text-3xl">designBuffer</span></h1>
            <InputField  field="Email" ref={emailRef}/>
            <InputField  field="Password" ref={passwordRef}/>
            <Custbuttons text={"Login"} callbackFunction={login}/>
            </div>
            }
            <Custbuttons  text={loginState ? "Login Instead" :"Create Account"} callbackFunction={toggle}/>
          </div>
        </div>
      </div>
    </>
  );
}
