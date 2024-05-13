import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Header(){

    const headerLeftButtonList = ['홈', '플래너', '커뮤니티'];
    const [clicked, setClicked] = useState(0);
    const nav = ['/home', '/planner', '/community'];
    
    let navigate = useNavigate();

    const toggleActive = (e : any)=>{
        setClicked(()=>{
            return e.target.value;            
        })
        navigate(nav[e.target.value])        
    }

    return(
        <>
        <div className='head'>
            <div className='header'>
                <div className='header-nav'>
                    <div className='header-nav-left'>
                        {headerLeftButtonList.map(function(a, i){
                            return(
                                <button value={i} className={'header-left-button'+(i == clicked ? "active" : "")} key={i} onClick={toggleActive}>
                                    {a}
                                </button>        
                            )
                        })}                    
                    </div>
                    <div className='header-nav-right'>
                        <div className='header-nav-right-login'>
                            <button className='header-right-button' onClick={()=>{ setClicked(()=>{return 5}); navigate('/login') }}>로그인</button>
                            <button className='header-right-button' onClick={()=>{ setClicked(()=>{return 5}); navigate('/join') }}>회원가입</button>
                        </div>            
                        <button className='header-nav-right-write'>글쓰기</button>
                    </div>
                </div>
            </div>            
        </div>
        </>        
    )
}

export default Header;