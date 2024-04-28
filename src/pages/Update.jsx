import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../components/button/Button';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import { DispatchContext , StateContext} from '../App';
import useDiary from '../hooks/useDiary';

const Update = () => {
  const params = useParams();
  const nav = useNavigate();
  const {onDelete , onUpdate} = useContext(DispatchContext);
  const currentDiaryItem = useDiary(params.id);
  
  const onClickDelete = () => {
   if(window.confirm('정말 삭제하시겠습니까?')) {
    onDelete(params.id);
    nav("/", {replace:true});
   }
  };

  const onSubmit = (input) => {
    if( window.confirm('일기를 정말 수정하시겠습니까?')) {
    onUpdate(
      params.id , 
      input.createDate.getTime(), 
      input.emotionId, 
      input.contents);
      nav('/', {replace:true});
    }
  };

  return (
   <div>
    <Header
    title={'일기 수정'}
    leftChild={<Button onClick={()=>nav(-1)} text={'< 뒤로가기'}/>}
    rightChild={<Button onClick={onClickDelete} text={'삭제'} type={'delete'}/>}/>
    <Form currentData={currentDiaryItem} onSubmit={onSubmit}/>
   </div>
  )
}

export default Update