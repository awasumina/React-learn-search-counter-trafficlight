import React, { useState }  from "react";

export default function Search(){
    const [text,setText] = useState('');

    const handleTextChanges=(event)=>{
        setText(event.target.value)
    }

    return(
        <div>
            <h1>{text}</h1>
            <input type="text" value={text} onChange={handleTextChanges}/>
        </div>
    )

}