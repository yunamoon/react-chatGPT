import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Editor from './pages/Editor';
import Update from './pages/Update';
import { useReducer, useRef, createContext, useEffect, useState} from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();


function reducer(state, action) {

  let nextState;

  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
     { nextState = [action.data, ...state];
      break; 
    }
    case 'UPDATE':
      {nextState =  state.map((item)=> String(item.id) === String(action.data.id)? action.data : item);
      break; }
    case 'DELETE':
      {nextState = state.filter((item)=> String(item.id) !== String(action.id));
      break; }
  }

  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const idRef = useRef(1)
  const [data, dispatch] = useReducer(reducer, []);
 
  useEffect(()=>{
    const storageData = localStorage.getItem('diary');
  
    if (!storageData) {
      setIsLoading(false);
      return;
    }

    const parseData = JSON.parse(storageData);

    if(!Array.isArray(parseData)) {
         setIsLoading(false);
      return;
    }

    let maxId = 0;
    parseData.forEach((item)=>{
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    })
    dispatch({
      type : "INIT",
      data : parseData,
    });
    setIsLoading(false);
  },[]);

  // 일기 추가
  const onCreate = (createDate , emotionId, contents) => {
    dispatch({
      type:'CREATE',
      data: {
        id : idRef.current++,
        createDate,
        emotionId,
        contents
      }
    })
  };

  // 일기 수정
  const onUpdate = (id ,createDate , emotionId, contents)=> {
    dispatch({
      type: "UPDATE",
      data: {
        id : id,
        createDate,
        emotionId,
        contents
      }
    })

  };

  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type:"DELETE",
      id
    });
  };

  if(isLoading) {
    return <div>데이터를 로딩하고 있습니다.</div>
  }
  
  return (
    <>
    <StateContext.Provider value={data}>
      <DispatchContext.Provider value={{onCreate, onDelete, onUpdate}}>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/editor' element={<Editor/>}/>
      <Route path='/diary/:id' element={<Diary/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </DispatchContext.Provider>
    </StateContext.Provider> 
    </>
  );
}

export default App;

