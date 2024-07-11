import { useState } from "react"

export default function LikerBoy(){
    const [like, setLike] = useState(0)
    const handleLike = () =>{
        
        setLike(like + 1)
    }

    const handleUnlike = () =>{
        const unLike = like - 1
        setLike(unLike)
    }
    return(
        <>
        <h1>Like: {like}</h1>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleUnlike}>Unlike</button>
      
        </>

    )
}