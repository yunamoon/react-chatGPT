import React, { useContext, useEffect, useState } from 'react'
import { DispatchContext, StateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) =>  {
 const data = useContext(StateContext);
 const [currentDiary, setCurrentDiary] = useState();
 const nav = useNavigate();

 useEffect(()=>{
    const currentDiary = data.find((item)=> String(item.id) === String(id));
    if(!currentDiary) {
      window.alert('잘못된 접근입니다.');
      nav('/', {replace:true});
    }
    setCurrentDiary(currentDiary);

}, [id, data]);

    return currentDiary;
}

export default useDiary;