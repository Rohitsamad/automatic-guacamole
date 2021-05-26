import React, { useEffect, useState } from 'react';
import './timer.css';

export const Timer = () => {
    const [count,setCount] = useState(100);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(25);
    const [hours, setHours] = useState(0);
    const [disable, setDisable] = useState(false);
    const [percentage, setPercentage] = useState(50);


    useEffect(
        ()=>{
            let intervalId;
            if(count === 0)
            {
                setDisable(false);
                setMinute(25);
            }
            if(count>0 && disable){
                intervalId=setInterval(()=>{

                    const x=count-1;
                    const sec=x%60;
                    const min=Math.floor(x/60);
                    const hour=Math.floor(x/3600);
                    setCount(x);
                    setMinute(min);
                    setHours(hour);
                    setSecond(sec);
                },1000);
            }
            return ()=>clearInterval(intervalId)

        },[count,minute,second,hours,disable]
            
    );

    function handleHours(event){
        setHours(event.target.value);
    }
    function handleMinutes(event){
        setMinute((event.target.value)%60);
    }
    function handleSeconds(event){
        setSecond((event.target.value)%60);
    }
    function handleClick(){
        setDisable(!disable);
        if(!disable)
        {
        const x=second+(minute*60)+(hours*60*60);
        setPercentage(x);
        setCount(x);}
        
    }

    return(
        <>
        <div>
            <h1>Time Counter</h1>
            <hr/>
            <div className={disable?'Show':'Hide'}>
                <span>Hours<input type="number" value={hours} onChange={handleHours}  min="0"/></span>
                <span>Minutes<input type="number" value={minute} onChange={handleMinutes}  min="0" max="59"/></span>
                <span>Seconds<input type="number" value={second} onChange={handleSeconds}  min="0" max="59"/></span>
            </div>
                <span><button type="submit" className="x"  onClick={handleClick}>{disable?'Stop':'Start'}</button></span>
             
            <p>
                {hours.toString().padStart(2,'0')}
                :{minute.toString().padStart(2,'0')}
                :{second.toString().padStart(2,'0')}
            </p>
            
                <div className="ProgressBar">
                    <div className="fill" style={{width:`${(count/percentage)*100}%`}}></div>
                </div>

          
            

        </div>
        </>
    );
};

export default Timer;