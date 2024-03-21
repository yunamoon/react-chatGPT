import { useState } from 'react';
import './App.css'
import { CallGPT } from './api/gpt';
import UserForm from './components/UserForm';
import styled from 'styled-components';


function App() {
  const [data , setData ] = useState('');
  const [isLoading , setIsLoading] = useState(false);

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${userInput}`,
      });
      setData(message);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  };
  
 
  return (
    <AppContainer>
    <div>메세지 왔다 : {data}</div>

    <UserForm    
    isLoading={isLoading}
    onSubmit={handleSubmit}/>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
padding: 20px;
display : felx;
flex-direction : colum;
max-width : 720px;
width : 100%;
mrgin : 0 auto;
`;