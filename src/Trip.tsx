import Header from './Layout/Header';
import Community  from './Community/Community';
import {Routes, Route} from 'react-router-dom';
import Login from './Auth/Login';
import Normal from './Auth/Normal';
import Join from './Auth/Join';
import Detail from './Community/detail';

function Trip() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/community' element={<Community></Community>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>        
        <Route path='/login/normal' element={<Normal></Normal>}></Route>  
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
      </Routes>
    </>
  );
}

export default Trip;
