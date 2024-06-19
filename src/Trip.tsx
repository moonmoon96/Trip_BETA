import Header from './Layout/Header';
import Community  from './Community/Community';
import {Routes, Route} from 'react-router-dom';
import Login from './Auth/Login';
import Normal from './Auth/Normal';
import Join from './Auth/Join';
import Detail from './Community/detail';
import Test from './Auth/Test';
import Chat from './Chat/Chat';

function Trip() {

  return (
    <>
      <Header></Header>
      <Chat></Chat>
      <Routes>
        <Route path='/community' element={<Community></Community>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>        
        <Route path='/login/normal' element={<Normal></Normal>}></Route>  
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
      </Routes>
    </>
  );
}

export default Trip;
