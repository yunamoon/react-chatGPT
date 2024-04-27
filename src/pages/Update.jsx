import React, { useContext } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../components/button/Button';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import { DispatchContext , StateContext} from '../App';

const Update = () => {
  const params = useParams();
  const nav = useNavigate();
  const {onDelete} = useContext(DispatchContext);
  const data = useContext(StateContext);

  const onClickDelete = () => {
   if(window.confirm('정말 삭제하시겠습니까?')) {
    onDelete(params.id);
    nav("/", {replace:true});
   }
  };

  const getCurrentDiary = () => {
    const currentDiary = data.find((item)=> String(item.id) === String(params.id));
    if(!currentDiary) {
      window.alert('잘못된 접근입니다.');
      nav('/', {replace:true});
    }

    return currentDiary;
  }

  const currentDiaryItem = getCurrentDiary();
  console.log(currentDiaryItem);
  return (
   <div>
    <Header
    title={'일기 수정'}
    leftChild={<Button onClick={()=>nav(-1)} text={'< 뒤로가기'}/>}
    rightChild={<Button onClick={onClickDelete} text={'삭제'} type={'delete'}/>}/>
    <Form/>
   </div>
  )
}

export default Update