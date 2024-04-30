import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../components/button/Button';
import EmotionViewer from '../components/emotionViewer/EmotionViewer';
import useDiary from '../hooks/useDiary';
import { getStringDate } from '../util/getStringDate';
import Header from '../components/header/Header';

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const currentDiary = useDiary(params.id);

  if(!currentDiary) {
    return <div>로딩중 ...</div>;
  }

  const {createDate, emotionId, contents} = currentDiary;
  const title = getStringDate(new Date(createDate));

  return (
    <div>
      <Header 
      title={`${title} 일기`}
      leftChild={<Button text={'< 뒤로가기'} onClick={()=>nav(-1)}/>}
      rightChild={<Button text={'수정하기'} onClick={()=>nav(`/update/${params.id}`)}/>}/>
      <EmotionViewer emotionId={emotionId} contents={contents}/>
    </div>
  )
}

export default Diary