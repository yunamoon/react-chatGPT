import React, { useState } from 'react'
import { Input,  Button } from 'antd';
const { TextArea } = Input;
const UserForm = ({isLoading, onSubmit })  => {

    const [userInput , setUserInput] = useState('');

    const handleClick = () => {
      onSubmit(userInput);
    }

  return (
    <>
    <TextArea rows={4} value={userInput} onChange={(e)=> setUserInput(e.target.value)} placeholder='오늘 하루는 어땠나요?'/>
    <Button loading={isLoading} onClick={handleClick}>오늘 하루 위로 받기</Button>
    </>
  )
}

export default UserForm