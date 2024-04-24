import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Editor from './pages/Editor';
import Update from './pages/Update';
import { useReducer, useRef, createContext} from 'react';

const test = [
  {
    id : 1,
    createDate : new Date('2024-04-19').getTime(),
    emotionId : 1,
    contents : '1 test',
  },
  {
    id : 2,
    createDate : new Date('2024-04-18').getTime(),
    emotionId : 2,
    contents : '2 test',
  },
  {
    id : 4,
    createDate : new Date('2024-03-18').getTime(),
    emotionId : 3,
    contents : '3 test',
  }
];


export const StateContext = createContext();
export const DispatchContext = createContext();


function reducer(state, action) {

  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item)=> String(item.id) === String(action.data.id)? action.data : item);
    case 'DELETE':
      return state.filter((item)=> String(item.id) !== String(action.data.id));
  }
  return state;
};

function App() {
  const idRef = useRef(3)
  const [data, dispatch] = useReducer(reducer, test);

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
      data : {
        id: id,
      }
    })
  };

  return (
    <>
    <StateContext.Provider value={test}>
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

