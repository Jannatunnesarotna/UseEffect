import { useState } from "react"

export default function Input(){
    const [text, setText] = useState("Hello")
    const handleInput = (e) =>{
        setText(e.target.value)
    }

    const handleReset = ()=>{
        setText("Hello")
    }
   return(
    <div>
    <input value={text} onChange={handleInput} type="text" name="" id="" />
    <p>You typed: {text} </p>
    <button onClick={handleReset}>Reset</button>
    </div>
   ) 
}