import { useState } from "react";

// function Trafficlight(){
//     const [text,setNum]=useState('Yellow');
//     const red=()=>{
//         setNum('Red');
//     }

//     const green=()=>{
//         setNum('Green');
//     }

//     const yellow=()=>{
//         setNum('Yellow');
//     }

    
    
//     return(
//         <div>

//         <button  onClick={red}>RED</button>
//         <button  onClick={()=>changeLight('Red')}>RED</button>
//         <button onClick={yellow}>YELLOW</button>
//         <button onClick={green}>GREEN</button>
//         <h1>{text}</h1>
//         </div>
//     )
// }


function Trafficlight(){
    const [text,setNum]=useState('Yellow');

    const changeLight=(light)=>{
        setNum(light);

    }

    return (
        <div>
         <button  onClick={()=>changeLight('Red')}>RED</button>
         <button  onClick={()=>changeLight('Green')}>GREEN</button>
         <button  onClick={()=>changeLight('Yellow')}>YELLOW</button>
         <h1>{text}</h1>

        </div>
    )
}
export default Trafficlight