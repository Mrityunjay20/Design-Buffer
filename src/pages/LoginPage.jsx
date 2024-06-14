import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Custbuttons from "../components/UiComponents/CustButtons";
import InputField from "../components/UiComponents/InputField";
import { supabase } from "../utils/Supabase";
import "./LoginPage.css";
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
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      localStorage.setItem("email",data.user.email)
      console.log("data is "+ data.user.email,"error is "+error); 
    if(!error){
        setLoginData(true);
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
      <div className="min-h-screen flex user-select-none items-center justify-center">
        <div className=" flex w-2/3 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="w-1/2 start-0">
            <h1>{loginData.email +" "+ loginData.name +" "+ loginData.password}</h1>
          </div>
          <div className="w-1/2 end-0 text-center">
            {loginState ? <div className="flex-col">
                <h1>Create An Account</h1>
                <InputField field="User Name" ref={nameRef}/>
                <InputField  field="Email" ref={emailRef}/>
                <InputField  field="Password" ref={passwordRef}/>
                <Custbuttons text={"Submit"} callbackFunction={createAccount}/>
            </div>
             : 
             <div className="flex-col">
            <h1>Login</h1>
            <InputField  field="Email" ref={emailRef}/>
            <InputField  field="password" ref={passwordRef}/>
            <Custbuttons text={"Submit"} callbackFunction={login}/>
            </div>
            }
            
            <Custbuttons  text={loginState ? "Login Instead" :"Create Account"} callbackFunction={toggle}/>
            
          </div>
        </div>
      </div>
    </>
  );
}
