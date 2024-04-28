import React from 'react'
import './EmotionViewer.css';
import { getEmotion } from '../../util/useGetEmotion';
import { emotionList } from '../../util/constants';


const EmotionViewer = ({ emotionId}) => {
    const emotionItem = emotionList.find((item) =>  String(item.id) === String(emotionId));

  return (
    <div className='EmotionViewer'>
        <section className='emotion'>
            <h4>오늘의 감정</h4>
            <div className={`emotion_wrapper emotion_wrapper_${emotionId}`}>
                <h3>{getEmotion(emotionId)}</h3>
                <p>{emotionItem.name}</p>
            </div>
        </section>
        <section className='cotent'>
            <h4>오늘의 일기</h4>
            <div className='content_wrapper'>
                <p>...dlfrl?</p>
            </div>
        </section>
    </div>
  )
}

export default EmotionViewer