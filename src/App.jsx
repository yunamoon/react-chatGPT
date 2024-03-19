import { useState } from 'react';
import './App.css'
import { CallAPI } from './api/gpt';

const testData = JSON.parse(`
{"title": "이직 준비의 고난", 
"image": "https://source.unsplash.com/1600x900/?job-interview", 
"summary": "이직 준비가 힘들고 할 일이 너무 많아서 언제 끝나는지 모르겠다.", 
"emotional_contents": "이직 준비에 대한 스트레스와 불안으로 인해 마음이 무거워졌다. 끝없이 이어지는 일상 속에서 피로감이 눈에 선하게 다가온다.", 
"emotional_result": "스트레스와 불안이 누적되어 마음이 무거워진 상태다. 증상이 계속되면 우울증으로 이어질 수 있으니 조심해야 한다.",
"consultant": "이직 준비 과정은 많은 사람들에게 부담스러운 일이다. 하지만 지속적인 자기관리와 긍정적인 마음가짐으로 극복할 수 있다. 또한, 스트레스 관리와 적절한 휴식이 필요하다.", 
"action_list": ["스트레스 관리를 위해 매일 조금씩 휴식을 취하고 산책을 하거나 취미활동을 즐기세요.", "이직 준비 일정을 구체적으로 계획하고 우선순위를 정해서 하루에 조금씩 진행해 보세요.", "자신을 위로해 줄 수 있는 사람과 대화를 나누고 공감을 받아보세요."], 
"comment": "어두운 밤이 지나면 반드시 새벽이 온다. 힘든 시간을 견뎌내면 반드시 좋은 결과를 얻게 될 것입니다."}`
);

function App() {
  const [data , setData ] = useState(testData);
  const [isLoading , setIsLoading] = useState(false);

  const handleCallAPI = async () => {
    try {
      setIsLoading[true];
      const message = await CallAPI({input : `이직 준비가 너무 힘들다. 할게 너무 많아. 아, 언제 끝나냐`});  
      setData(JSON.parse(message));  
    } catch (error) {
      
    } finally {
      setIsLoading[false];  
    }

  };
 
  return (
    <>
    <button onClick={handleCallAPI}> Call API</button>
    <div>메세지 왔다 : {JSON.stringify(data)}</div>
    </>
  )
}

export default App
