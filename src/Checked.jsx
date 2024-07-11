import React, { useState } from 'react';

const checked = () => {
    const [like,setLike] = useState(true)
    const handleInput=(e) =>{
        setLike(e.target.checked)  
    }
    return (
        <div>
        <lebel>
    <input checked={like} onChange={handleInput} type="checkbox" />
            i like this
        </lebel>
        <p>You {like ? "liked" :"did not like"} This</p>
        </div>
    );
};

export default checked;