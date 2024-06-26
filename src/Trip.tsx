import Header from './Layout/Header';
import Community  from './Community/Community';
import {Routes, Route} from 'react-router-dom';
import Login from './Auth/Login';
import Normal from './Auth/Normal';
import Join from './Auth/Join';
import Detail from './Community/Detail';
import Chat from './Chat/Chat';
import refreshAPI from './Utility/TokenRefresher';
import { useEffect } from 'react';
import Write from './Community/WriteTwo';
import GetSchedule from './Community/GetSchedule';

function Trip() {

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await refreshAPI.get('');
      }catch(err){
        console.log("에러확인 : ", err);
      }
    };

    fetchData();
  }, []);

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
        <Route path='/write' element={<Write></Write>}></Route>
        <Route path='/test' element={<GetSchedule></GetSchedule>}></Route>
      </Routes>
    </>
  );
}

export default Trip;
