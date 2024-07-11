import { useState } from "react"


export default function Players(){
    const [players, setPlayers] = useState(11)
    const handleOut = () =>{
        const playerOut = players - 1
        setPlayers(playerOut)
    }
  
    return(
        <>
        <h1>Players: {players}</h1>
        <button onClick={handleOut}>Out</button>
        </>

    )
}