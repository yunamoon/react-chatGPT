import { useState } from 'react';
import { CallGPT } from '../api/gpt';
import styled from 'styled-components';
import UserForm from '../components/UserForm';

const Editor = () => {

    const [data , setData ] = useState('');
    const [isLoading , setIsLoading] = useState(false);
  
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

  return (
    <AppContainer>
      <AppTitle>
        오늘의 위로 🌕
      </AppTitle>
    <div>메세지 왔다 : {data}</div>
    <UserForm    
    isLoading={isLoading}
    onSubmit={handleSubmit}/>
    </AppContainer>
  )
}

export default Editor

const AppContainer = styled.div `
  padding: 20px;
  display : flex;
  flex-direction : column;
  max-width: 720px;
  width : 100%;
  margin: 0 auto;
`;

const AppTitle = styled.div`
  width : 100%;
  font-weight : 400;
  font-size : 35px;
  text-align : center;
  font-family: "Noto Serif KR";
`;