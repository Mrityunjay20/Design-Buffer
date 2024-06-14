import { forwardRef } from "react";

const InputField = forwardRef(({field,value},ref)=>{
    return(
    <input value={value}  className="px-2 w-3/5 bg-gray-300 py-1 my-2 mx-auto block rounded-md" placeholder={field} ref={ref}/>)
})

export default InputField;