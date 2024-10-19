import { useState } from "react";

function Counter(){
    const [num,setNum] = useState(1);
    function increase(){
      setNum(num+1);
    }
    function decrease(){
        setNum(num-1);
    }
  return(
    <div>
      <button onClick={increase}>+</button>
      <h1>{num}</h1>
      <button onClick={decrease}> -</button>
    
    </div>
  )
  }
  export default Counter