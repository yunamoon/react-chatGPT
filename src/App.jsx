import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Form from './pages/Form';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Button from './components/button/Button';
import Header from './components/header/Header';

function App() {
  return (
    <>
    <Header/>
    <Button type={'create'} text={'button'} onClick={()=> {console.log('click')}}/>
    <Button type={'update'} text={'button'} onClick={()=> {console.log('click')}}/>
    <Button type={'nomal'} text={'button'} onClick={()=> {console.log('click')}}/>
    <Button type={'delete'} text={'button'} onClick={()=> {console.log('click')}}/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Form/>}/>
      <Route path='/diary/:id' element={<Diary/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  );
}

export default App;

