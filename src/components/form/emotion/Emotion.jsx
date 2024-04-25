import React from 'react'
import './Emotion.css';
import { getEmotion } from '../../../util/useGetEmotion';

const Emotion = ( {id, name, isSelected}) => {
  return (
    <div className={`emotion_item ${isSelected? `emotion_on_${id}` : ''}`}>
        <h3 className='emotion_img'>{getEmotion(id)}</h3>
        <p className='emotion_name'>{name}</p>
    </div>
  )
}

export default Emotion