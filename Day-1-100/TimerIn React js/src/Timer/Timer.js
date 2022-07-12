import React, {useState, useEffect} from 'react'
import './Timer.css'
const Timer = () =>{
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);


    let Timer ;
    useEffect(()=>{
        // setInaterval dely for fun and execute again and again
      Timer = setInterval(()=>{
            //sec + 1 => 0 + 1; 
        setSeconds(seconds + 1);
        // min = 59, 
        if(seconds === 59){
            setMinutes(minutes + 1);
            setSeconds(0);
        }
},1000)

    //here we cancel our interval 
     return () => clearInterval(Timer); 
    })
const restart = () =>{
    setMinutes(0);
    setSeconds(0);
}
const stop = () =>{
   clearInterval(Timer)
}

return(
    <>
  <div className='container shadow-lg'>
  <h1 className='timer-heading'>Timer</h1>
    <h1 className='Time'>
         
        {minutes < 10 ? '0'+minutes : minutes} <span> : </span> 
        {seconds < 10 ? '0'+seconds : seconds}
    </h1>
    <button className='start' onClick={restart} >Restart</button>
    <button className='stop' onClick ={stop}>Stop</button>
  </div>
    </>
)
}
export default Timer;