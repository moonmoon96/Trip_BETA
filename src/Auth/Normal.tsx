import { useNavigate } from "react-router-dom";
import Find from "./Find";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { setCookie } from "../Utility/Cookie";

function Normal(){

    const [find, setFind] = useState('');
    const [keepClicked, setKeepClicked] = useState(0);
    const [LoginInput, setLoginInput] = useState({
        loginEmail : '',
        loginEmailValid : false,
        loginPw : '',
        loginPwValid : false
    })

    let navigate = useNavigate();

    const baseUrl = "http://172.16.1.87:8080";  

    async function doLogin() { 
        await axios
            .post(baseUrl+"/login",
            {
                email : LoginInput.loginEmail,
                password : LoginInput.loginPw
            },
            {headers : {
                "Content-Type" : "application/x-www-form-urlencoded"
            }}
        )
            .then((response)=>{
                console.log("웬일?" + response.data);
                localStorage.setItem('refresh', response.data['refresh']);
                setCookie('access' ,response.data['access']);
            })
            .catch((err)=>{
                console.log("또 에러임;" + err);
            })
    }

    const LoginSubmit = LoginInput.loginEmailValid && LoginInput.loginPwValid;

    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        setLoginInput(prev => ({ ...prev, loginEmailValid: emailRegex.test(LoginInput.loginEmail) }));
    }, [LoginInput.loginEmail]);

    useEffect(() => {
        const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
        setLoginInput(prev => ({ ...prev, loginPwValid: pwRegex.test(LoginInput.loginPw) }));
    }, [LoginInput.loginPw]);

    return(        
        <>
            <div className="normal">
                <p className="normal-login">로그인</p>
                <div className="normal-login-input">
                    <input value={LoginInput.loginEmail} className="normal-login-email" type="text" placeholder="이메일 주소" maxLength={40} onChange={(e)=>setLoginInput({...LoginInput, loginEmail:e.target.value})}></input>
                    <div className="normal-login-balance">
                        <input  value={LoginInput.loginPw} className="normal-login-pw" type="password" placeholder="비밀번호" maxLength={40} onChange={(e)=>setLoginInput({...LoginInput, loginPw:e.target.value})}></input>
                    </div>
                </div>            
                <div className="normal-login-keep">
                <button className={"keep-button" + (keepClicked === 1 ? 'able' : '')} onClick={()=>{keepClicked === 0 ? setKeepClicked(1) : setKeepClicked(0)}}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.65217L5.58333 11L12 1" stroke="#fff" stroke-width="1.5"></path></svg>
                    </button>
                    <p className="normal-login-font" onClick={()=>{keepClicked === 0 ? setKeepClicked(1) : setKeepClicked(0)}}>로그인 상태 유지</p>
                </div>
                <button className={"normal-login-button" + (LoginSubmit == true ? 'active' : '') } type="submit" onClick={()=>{doLogin(); navigate('/test');}} disabled={!LoginSubmit}>로그인</button>
                <div className="normal-login-find">
                    <div className="normal-login-find-left">
                        <p className="normal-login-find-font" onClick={()=>{setFind('이메일 찾기')}}>이메일 찾기</p>
                        <p className="normal-login-find-font" onClick={()=>{setFind('비밀번호 찾기')}}>비밀번호 찾기</p>
                    </div>
                    <p className="normal-login-find-font" onClick={()=>{navigate('/join')}}>회원가입</p>
                </div>                  
            </div>          
            {
                find == '이메일 찾기' ? <Find find={find} setFind={setFind}></Find> : find == '비밀번호 찾기' ? <Find find={find} setFind={setFind}></Find> : null                      
            }            
        </>
    )
}

export default Normal;