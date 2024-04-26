import { useContext, useState } from 'react';
import { CallGPT } from '../api/gpt';
import Header from '../components/header/Header';
import Button from '../components/button/Button';
import UserForm from '../components/UserForm';
import Form from '../components/form/Form';
import { useNavigate } from 'react-router-dom';
import { DispatchContext } from '../App';


const Editor = () => {
    const nav = useNavigate();
    const [data , setData ] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const {onCreate} = useContext(DispatchContext);
  
    const handleClickAPICall = async (userInput) => {
      try {
        setIsLoading(true);
        const message = await CallGPT({
          prompt: `${userInput}`,
        });
        setData(JSON.parse(message));
      } catch (error) { 
        /* empty */ 
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleSubmit = (userInput) => {
      handleClickAPICall(userInput);
    };

   const  onSubmit  = (input) => {
    onCreate(
      input.createDate.getTime(),
      input.emotionId,
      input.contents
    );
    nav('/', {replace: true});
   };

  return (

    <>
    <Header 
    title={'새로운 일기 작성'}
    leftChild={
    <Button 
    text={'< 뒤로가기'}
    onClick={()=>nav(-1)}/>
    }/>

    <Form  onSubmit={ onSubmit}/>
    </>

  )
}

export default Editor

