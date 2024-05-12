import { useState } from "react";

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
                        <input  className="join-body-inputbox" type="text" placeholder="이메일 주소"></input>
                    </div>
                    <div className="join-body-input">
                        <input  className="join-body-inputbox" type="password" placeholder="비밀번호(8자~12자, 영문+숫자+특수문자 사용)"></input>
                    </div>
                    <div className="join-body-input">
                        <input  className="join-body-inputbox" type="text" placeholder="이름"></input>
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