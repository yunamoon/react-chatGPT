import React, { useState } from 'react'
import Header from '../components/header/Header';
import Button from '../components/button/Button';
import Diary from '../components/diary/Diary';

const Home = () => {

  const [pivotDate , setPivotDate] = useState(new Date());
  const onLastMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1));
  };
  const onNextMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1));
  };

  return (
    <>
    <Header 
    title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() +1}월`}
    leftChild={<Button onClick={onLastMonth} text={'<'}/>}
    rightChild={<Button onClick={onNextMonth} text={'>'}/>}/>
    <Diary/>
    </>
  )
}

export default Home