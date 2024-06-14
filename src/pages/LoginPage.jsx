import { useRef, useState } from "react";
import Custbuttons from "../components/UiComponents/CustButtons";
import InputField from "../components/UiComponents/InputField";
import InputButton from "../components/UiComponents/InputField";
import "./LoginPage.css";
export default function LoginPage() {
  const [loginState, setLoginState] = useState(true);
  const [loginData, setLoginData] = useState({
    name:"none",
    email:"none",
    password:"none"
  })
  const nameRef =  useRef();
  const emailRef =  useRef();
  const passwordRef =  useRef();
  function toggle() {
    setLoginState((loginState) => !loginState);
    setLoginData({
        name: '',
        email: '',
        password: ''
    })
    nameRef.current.value='';
    emailRef.current.value='';
    passwordRef.current.value='';
  }
  function createAccount(){
    console.log(nameRef.current.value+" "+emailRef.current.value+" "+passwordRef.current.value)
    setLoginData({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
    })
  }
  function login(){
    console.log(emailRef.current.value+" "+passwordRef.current.value)
    setLoginData({
        email: emailRef.current.value,
        password: passwordRef.current.value
    })
  }


  return (
    <>
      <div class="min-h-screen flex user-select-none items-center justify-center">
        <div class=" flex w-2/3 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
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
            
            <Custbuttons text={loginState ? "Login" :"Create Account"} callbackFunction={toggle}/>
            
          </div>
        </div>
      </div>
    </>
  );
}
