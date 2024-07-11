import { useState } from "react"

export default function Name(){
    const [name, setName] = useState("Taylor Swift")
    const handleName = () =>{
       setName("Ellie Goulding")
    }
    return(
        <div>
            <h1>Name: {name}</h1>
            <button onClick={handleName}>Change {name}</button>
        </div>
    )
}