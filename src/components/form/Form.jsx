import React from 'react'
import './Form.css';
import Emotion from './emotion/Emotion';
import Button from '../button/Button';

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

const Form = () => {

    const emotionId = 1;

  return (
    <div className='form'>
    <section className='date'>
        <h4>오늘의 날짜</h4>
        <input type='date'></input>
    </section>
    <section className='emotion'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list'>
            
        {emotionList.map((item) => (
         <Emotion key={item.id} {...item} isSelected={item.id === emotionId}/>
        ))}
          
        </div>

    </section>
    <section className='content'>
        <h4>오늘의 일기</h4>
        <textarea placeholder='오늘 하루는 어땠나요?'/>
    </section>
    <section className='button'>
        <Button text={'취소'}/>
        <Button text={'완료'} type={'update'}/>
    </section>
    </div>
  )
}

export default Form