import React, { useState, useEffect } from 'react';

function Timer() {

    const [time, setTime] = useState(0);
    const [timerRunning, setTimerState] = useState(false);
    const [intervalCode, setIntervalCode] = useState(null);

    const controlTimer = () => {
        setTimerState(!timerRunning);
    }

    const stopTimer = () => {
        setTime(0);
        clearInterval(intervalCode);
        setTimerState(false);
    }

    useEffect(()=> {
        let interval;
        if(timerRunning) {
            interval = setTimeout(() => {setTime(time+1)}, 1000);
            setIntervalCode(interval);
        } else {
            clearInterval(intervalCode);
        }
    }, [timerRunning, time])

    return (
        <div>
            <div style={{fontSize: 18}}>
                Timer -- {time}
            </div>
            <button onClick={controlTimer}>
                {timerRunning? "Pause" : "Start"}
            </button>
            <button onClick={stopTimer}>
                Stop
            </button>
        </div>
    );
}

export default Timer;