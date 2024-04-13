import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Form from './pages/Form';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Form/>}/>
      <Route path='/diary' element={<Diary/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  );
}

export default App;

