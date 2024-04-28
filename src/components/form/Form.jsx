import React, { useEffect, useState } from 'react'
import './Form.css';
import Emotion from './emotion/Emotion';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

const emotionList = [
    {
        id : 1,
        name : '좋음'
    },
    {
        id : 2,
        name : '행복'
    },
    {
        id : 3,
        name : '보통'
    },
    {
        id : 4,
        name : '우울'
    },
    {
        id : 5,
        name : '화남'
    },
];

const getStringDate = (TargetDate) => {
    let year = TargetDate.getFullYear();
    let month = TargetDate.getMonth()+1;
    let date = TargetDate.getDate();

    if(month < 10) {
        month = `0${month}`;
    }
    if(date < 10) {
        date = `0${date}`;
    }

    return`${year}-${month}-${date}`;
};

const Form = ({ onSubmit, currentData}) => {
    const [input, setInput] = useState({
        createDate : new Date(),
        emotionId : 3,
        contents : ""
      });
    const nav = useNavigate();

    useEffect(()=>{
        if(currentData) {
            setInput({
                ...currentData,
                createDate : new Date(Number(currentData.createDate)),
            });
        }
    }, [currentData]);

    
    const onChangeInput = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;
        if(name === 'createDate') {
           value = new Date(value);
        }

        setInput({
            ...input,
            [name] : value
        })
    };

    const onClickSubmitButton = () => {
        onSubmit(input)
    };

  return (
    <div className='form'>
    <section className='date'>
        <h4>오늘의 날짜</h4>
        <input type='date' 
        name='createDate'
        value={getStringDate(input.createDate)} 
        onChange={onChangeInput}></input>
    </section>
    <section className='emotion'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list'>
            
        {emotionList.map((item) => (
         <Emotion 
         onClick={()=>onChangeInput({
            target : {
                name : "emotionId",
                value : item.id
            },
         })}
         key={item.id} {...item} 
         isSelected={item.id === input.emotionId}/>
        ))}
          
        </div>

    </section>
    <section className='content'>
        <h4>오늘의 일기</h4>
        <textarea 
        name='contents'
        value={input.contents}
        onChange={onChangeInput}
        placeholder='오늘 하루는 어땠나요?'/>
    </section>
    <section className='button'>
        <Button text={'취소'} onClick={()=>nav(-1)}/>
        <Button 
        onClick={onClickSubmitButton}
        text={'완료'} type={'update'}/>
    </section>
    </div>
  )
}

export default Form