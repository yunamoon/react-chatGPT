import { useState } from 'react';
import './App.css'
import { CallAPI } from './api/gpt';

function App() {
  const [data , setData ] = useState('');
  const [isLoading , setIsLoading] = useState(false);

  const handleCallAPI = async () => {
    try {
      setIsLoading[true];
      const message = await CallAPI();  
      setData(message);  
    } catch (error) {
      
    } finally {
      setIsLoading[false];  
    }

  };
 
  return (
    <>
    <button onClick={handleCallAPI}> Call API</button>
    <div>메세지 왔다 : {data}</div>
    </>
  )
}

export default App
