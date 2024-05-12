import {useNavigate} from 'react-router-dom';

function Login(){

    let navigate = useNavigate();
    
    return(
        <div className='login'>
            <div className='login-banner'>
                <p className='login-talk'>로그인하고 <br></br>여행을 계속해요</p>
            </div>
            <div className='login-how'>
                <button className='login-kakao'>
                    <div className='login-kakao-img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path opacity="0.9" fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.029 2 1 5.13 1 8.989C1.06351 10.2194 1.46382 11.4088 2.15723 12.4272C2.85063 13.4456 3.81048 14.254 4.93201 14.764L3.93201 18.431C3.914 18.5032 3.91832 18.5792 3.9444 18.6489C3.97048 18.7187 4.01708 18.7788 4.07806 18.8215C4.13905 18.8642 4.21157 18.8874 4.28601 18.888C4.36045 18.8886 4.4333 18.8667 4.495 18.825L8.87201 15.925C9.24201 15.961 9.61702 15.982 9.99902 15.982C14.969 15.982 18.999 12.853 18.999 8.993C18.999 5.133 14.969 2.004 9.99902 2.004" fill="#252525"></path></svg>
                    </div>
                    <p className='login-kakao-font'>카카오 간편 로그인</p>
                    <div className='login-balance'></div>
                </button>
                <button className='login-normal' onClick={()=>{ navigate('/login/normal') }}>
                    <div className='login-normal0img'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 12.8247C12.3565 12.8247 12.6609 12.6653 13.0214 12.3068L20.0067 5.41434C19.6943 5.13546 19.1415 5 18.3645 5H5.44326C4.75434 5 4.26569 5.12749 3.98531 5.38247L11.0027 12.3068C11.3551 12.6653 11.6676 12.8247 12.012 12.8247ZM3.21629 17.6454L8.97597 11.9721L3.2243 6.32271C3.08011 6.57769 3 7 3 7.59761V16.4024C3 16.9841 3.0721 17.3984 3.21629 17.6454ZM20.7917 17.6375C20.9279 17.3904 21 16.9761 21 16.4024V7.59761C21 7.01594 20.9199 6.59363 20.7757 6.34661L15.0481 11.9721L20.7917 17.6375ZM5.63551 19H18.5567C19.2617 19 19.7583 18.8645 20.0467 18.6016L14.1829 12.8088L13.6862 13.2948C13.1335 13.8287 12.6048 14.0837 12.012 14.0837C11.4192 14.0837 10.8825 13.8287 10.3298 13.2948L9.83311 12.8088L3.9773 18.5857C4.29773 18.8566 4.85848 19 5.63551 19Z" fill="#252525"></path></svg>
                    </div>
                    <p className='login-normal-font'>이메일 로그인</p>
                    <div className='login-balance'></div>
                </button>
            </div>
            <div className='login-join'>
                <p className='login-join-font'>
                    아직 계정이 없으신가요?
                    <span className='login-join-join' onClick={()=>{navigate('/join')}}>회원가입</span>
                </p>                
            </div>            
        </div>
    )
}

export default Login;