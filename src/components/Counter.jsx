import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0);
    const [userInput , setUserInput] = useState('');

    const handleClickPlus = () => {
        setCount( count + 1);
    };

    const handleClickMinus = () => {
        setCount(count -1);
    };

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            setUserInput('');
            const num = Number(userInput);
            if(Number.isInteger(num)) setCount(num);
        } 
    };

  return (
    <>
    <div> 현재 카운트  : {count} </div>
    <div>
        <div> 카운트 값 입력 :</div>
        <input 
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleEnter}> 
        </input>
    </div>
    <div>
        <button onClick={handleClickPlus}>카운트 더하기</button>
        <button onClick={handleClickMinus}>카운트 빼기</button>
    </div>
    </>
  )
}

export default Counter
