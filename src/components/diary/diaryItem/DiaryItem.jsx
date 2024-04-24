import React from 'react'
import './DiaryItem.css'
import { getEmotion } from '../../../util/useGetEmotion';
import Button from '../../button/Button';

const DiaryItem = () => {

  const emotionId = 1;

  return (
    <div className='diaryItem'>
        <h1 className={`emotion emotion_${emotionId}`}>{getEmotion(1)}</h1>
      <div className='info'>
        <div className='create_date'>
          {new Date().toLocaleDateString()}
        </div>
        <div className='contents'>일기 내용 여기</div>
      </div>
      <div className='button'>
        <Button text={'수정'}/>
      </div>
    </div>
  )
}

export default DiaryItem