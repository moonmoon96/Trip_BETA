import React, {useState} from 'react';
import banner from './image/banner.webp';
import Board from './Board';
import Post from './Post';
import Paging from '../Utility/Paging';

function Community() {

    const [inputValue, setInputValue] = useState('');
  
    return (
      <>         
        <div className='community'>        
          <div className='top'>
            <div className='top-banner'>
              <img src={banner} alt='banner' className='banner'></img>          
            </div>
            <div className='search'>
              <input className='search-input' type='text' maxLength={20} placeholder='어느 도시로 떠나시나요?' onChange={(e)=>{setInputValue(e.target.value)}}></input>
            </div>
  
            <div className='bar'></div>
  
            <div className='main'>
              <Board></Board>
              <Post></Post>
              <Paging></Paging>
            </div>
            
          </div>
        </div>
      </>
    );
  }
  
  export default Community;
  