
import React from 'react'
import Header from '../components/header/Header';
import Button from '../components/button/Button';
import Diary from '../components/diary/Diary';

const Home = () => {
  return (
    <>
    <Header 
    title={'2024년 04월'}
    leftChild={<Button text={'<'}/>}
    rightChild={<Button text={'>'}/>}/>
    <Diary/>
    </>
  )
}

export default Home