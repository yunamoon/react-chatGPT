import React from 'react'
import './Diary.css';
import Button from '../button/Button';
import DiaryItem from './diaryItem/DiaryItem';

const Diary = () => {
  return (
    <div className='diary'>
        <nav className='menu_bar'>
            <select>
                <option value={'latest'}>최신순</option>
                <option value={'oldest'}>오래된순</option>
            </select>
            <Button 
            text={'오늘 일기 쓰기'}
            type={'update'}/>
        </nav>
        <div className='diary_list'>
            <DiaryItem/>
        </div>
    </div>
  )
}

export default Diary