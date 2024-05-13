import { useEffect, useRef, useState } from "react";

function Join(){

    const [open, setOpen] = useState('');
    const [gender, setGender] = useState('성별');
    const [month, setMonth] = useState('월');
    const [date, setDate] = useState('일');
    const monthList = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    const dateList = ['1일','2일','3일','4일','5일','6일','7일','8일','9일','10일','11일','12일','13일','14일','15일','16일','17일','18일','19일','20일','21일','22일','23일','24일','25일','26일','27일','28일','29일','30일','31일'];

    const changeGender = (e : any) => {
        setGender(e.target.value === 1 ? '남' : '여');
        setOpen('');
    }

    const changeMonth = (e : any) => {
        setMonth(e.target.value+'월')
        setOpen('');
    }

    const changeDate = (e : any) => {
        setDate(e.target.value+'일');
        setOpen('');
    }

    const emailTag = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        if(emailTag.current)
        emailTag.current.focus();
    },[])

    const [inputValue, setInputValue] = useState({
        email : '',
        validEmail : false,
        nonEmailDuplication : false,   //이메일 중복확인 여부
        pw : '',
        validPw : false,
        name : '',
        validName : false,
        gender : '',
        validGender : false,
        birth : '',
        validBirth : false,
        agree : false,  //정보 제공 동의 여부        
    })

    const submitRequirements = inputValue.email &&
                                inputValue.validEmail &&
                                // inputValue.nonEmailDuplication &&
                                inputValue.pw &&
                                inputValue.validPw;
                                // inputValue.name &&
                                // inputValue.validName &&
                                // inputValue.agree;

    const inputRegexs = {
        emailRegex : (/^[A-z0-9]{2,20}\+@[A-z]{2,20}\+\.[a-z]{2,3]$/),
        pwRegex : /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/
    }

    useEffect(()=>{
        const result = inputRegexs.emailRegex.test(inputValue.email);
        inputValue.validEmail=result;
    }, [inputValue.email])

    useEffect(()=>{
        const result =inputRegexs.pwRegex.test(inputValue.pw);
        inputValue.validPw=result;
    }, [inputValue.pw])
    
    return(
        <div className="join">
            <h3 className="join-title">회원가입</h3>
            <div className="join-body">
                <div className="join-body-title">
                    입력사항
                    <span className="join-body-title-sub">(필수)</span>
                </div>
                <div className="join-body-main">
                    <div className="join-body-input">
                        <input  value={inputValue.email} className="join-body-inputbox" ref={emailTag} type="text" placeholder="이메일 주소" onChange={(e)=>setInputValue({...inputValue, email:e.target.value})}></input>
                    </div>
                    <div className="join-body-input">
                        <input value={inputValue.pw} className="join-body-inputbox" type="password" placeholder="비밀번호(8자~12자, 영문+숫자+특수문자 사용)" onChange={(e)=>setInputValue({...inputValue, pw:e.target.value})}></input>
                    </div>
                    <div className="join-body-input">
                        <input value={inputValue.name} className="join-body-inputbox" type="text" placeholder="이름" onChange={(e)=>setInputValue({...inputValue, name:e.target.value})}></input>
                    </div>
                    <div className="join-body-input">
                        <li className="join-li" onClick={()=>setOpen('gender')}>{gender}</li>
                        <ul className={"join-ul" + (open === 'gender' ? "-year" : "")}>
                            <li className="join-ul-li" value={1} onClick={changeGender}>남</li>
                            <li className="join-ul-li" value={2} onClick={changeGender}>여</li>
                        </ul>
                    </div>
                    
                    <div className="join-body-grid">
                        <div className="join-body-grid-year">
                            <input className="join-body-year-font" type="text" placeholder="년(예 1996)"></input>
                        </div>
                        <div className="join-body-input">
                            <li className="join-li" onClick={()=>setOpen('month')}>{month}</li>
                            <ul className={"join-ul" + (open === 'month' ? "-month" : "")}>
                                {monthList.map(function(a,i){
                                    return(
                                        <li className="join-ul-li" value={i+1} key={i} onClick={changeMonth}>{a}</li>                                
                                    )
                                })}
                                
                            </ul>
                        </div>
                        <div className="join-body-input">
                            <li className="join-li" onClick={()=>setOpen('date')}>{date}</li>
                            <ul className={"join-ul" + (open === 'date' ? "-date" : "")}>
                                {dateList.map(function(a,i){
                                    return(
                                        <li value={i+1} className="join-ul-li" key={i} onClick={changeDate}>{a}</li>            
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="join-body-footer">
                    <div className="join-body-footer-agree">
                        <button className="keep-button">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.65217L5.58333 11L12 1" stroke="#fff" stroke-width="1.5"></path></svg>
                        </button>
                        <p className="join-agree-font">이용약관 동의</p>
                    </div>
                </div>
                <button className="join-body-button">회원가입</button>
            </div>
        </div>
    )
}

export default Join;