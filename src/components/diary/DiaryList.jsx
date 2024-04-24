import React, { useState } from 'react'
import './DiaryList.css';
import Button from '../button/Button';
import DiaryItem from './diaryItem/DiaryItem';
import { useNavigate } from 'react-router-dom';

const DiaryList = ({data}) => {
  const nav = useNavigate();

  const [sort, setSort] = useState('latest');

  const onChangeSort = (e) => {
    setSort(e.target.value);
  };
  
  const getSortedData = () => {
    return data.toSorted((a,b)=>{
      if(sort === 'oldest') {
        return Number(a.createDate) - Number(b.createDate);
      } else {
        return Number(b.createDate) - Number(a.createDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className='diary'>
        <nav className='menu_bar'>
            <select onChange={onChangeSort}>
                <option value={'latest'}>최신순</option>
                <option value={'oldest'}>오래된순</option>
            </select>
            <Button 
            onClick={()=>nav('/editor')}
            text={'오늘 일기 쓰기'}
            type={'update'}/>
        </nav>
        <div className='diary_list'>
          {sortedData.map((item)=> <DiaryItem key={item.id} {...item}/>)}
        </div>
    </div>
  )
}

export default DiaryList;