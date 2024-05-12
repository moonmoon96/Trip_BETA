import { useNavigate } from "react-router-dom";

function Normal(){

    let navigate = useNavigate();

    return(        
        <div className="normal">
            <p className="normal-login">로그인</p>
            <div className="normal-login-input">
                <input className="normal-login-email" type="text" placeholder="이메일 주소" maxLength={40}></input>
                <div className="normal-login-balance">
                    <input className="normal-login-pw" type="password" placeholder="비밀번호" maxLength={40}></input>
                </div>
            </div>            
            <div className="normal-login-keep">
                <button className="keep-button">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.65217L5.58333 11L12 1" stroke="#fff" stroke-width="1.5"></path></svg>
                </button>
                <p className="normal-login-font">로그인 상태 유지</p>
            </div>
            <button className="normal-login-button">로그인</button>
            <div className="normal-login-find">
                <div className="normal-login-find-left">
                    <p className="normal-login-find-font">이메일 찾기</p>
                    <p className="normal-login-find-font">비밀번호 찾기</p>
                </div>
                <p className="normal-login-find-font" onClick={()=>{navigate('/join')}}>회원가입</p>
            </div>
        </div>                    
    )
}

export default Normal;