import React from 'react'
import './DiaryItem.css'
import { getEmotion } from '../../../util/useGetEmotion';
import Button from '../../button/Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({id, emotionId, createDate , contents}) => {

  const nav = useNavigate();

  return (
    <div className='diaryItem'>
        <h1 
        onClick={()=>nav(`diary/${id}`)}
        className={`emotion emotion_${emotionId}`}>
          {getEmotion(id)}</h1>
      <div 
      onClick={()=>nav(`diary/${id}`)}
      className='info'>
        <div className='create_date'>
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className='contents'>{contents}</div>
      </div>
      <div className='button'>
        <Button 
        onClick={()=>nav(`update/${id}`)}
        text={'수정'}/>
      </div>
    </div>
  )
}

export default DiaryItem