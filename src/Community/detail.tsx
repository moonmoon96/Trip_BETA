import calendar from './calendar.png';
import eye from './eye.png';

function Detail(){
    return(
        <div className="detail">
            <div className="detail-img">
                <img className="detail-imgfile"></img>
            </div>
            <div className="detail-body">
                <div className="detail-body-left">
                    <>
                        <div className="detail-left">
                            <p className="detail-left-title">제목</p>
                            <div className="detail-left-sub">
                                <div className="detail-left-sub-left">
                                    <p className="detail-left-sub-left-font">조회수 123</p>
                                    <p className="detail-left-sub-left-font">메시지 5</p>
                                </div>
                                <div className="detail-left-sub-right">
                                    <p className="detail-left-sub-right-font">신고</p>
                                </div>
                            </div>
                            <div className="detail-left-main">
                                <div className="detail-left-plan">
                                    <p className="detail-left-plan-font">여행 일정</p>
                                    <div className="detail-left-plan-body">
                                        <div className="detail-left-plan-body-box">
                                            <div>
                                                <img src={calendar} alt="icon" className='plan-body-left-imgfile'></img>
                                            </div>
                                            <p className="plan-body-box-font">2024.06.01 - 2024.06.05 (5일)</p>
                                        </div>
                                        <div className="detail-left-plan-body-box">
                                            <div>
                                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7244 7.11371C12.7244 10.6866 6.49995 16.3557 6.49995 16.3557C6.49995 16.3557 0.275513 10.6866 0.275513 7.11371C0.275513 3.54077 3.06229 0.644341 6.49995 0.644341C9.93761 0.644341 12.7244 3.54077 12.7244 7.11371Z" fill="#808080"></path><ellipse cx="6.50063" cy="6.40462" rx="2.81106" ry="2.81106" fill="#FFFFFF"></ellipse></svg>
                                            </div>
                                            <p className="plan-body-box-font">동남아시아, 태국, 방콕</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-left-content">
                                    <p className="detail-left-plan-font">여행 소개</p>
                                    <p className="plan-body-box-font">여행 소개를 하는 내용 그런 내용 아무튼 그런 내용</p>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <div className="detail-body-right">
                    <div className='detail-body-right-box'>
                        <div className='detail-right-box-content'>
                            <p className='detail-right-box-font'>여행장</p>
                            <div className='right-box-content-box'>
                                <div className='right-box-content-box-top'>
                                    <div className='box-top-imgfile'>
                                        <img></img>
                                    </div>
                                    <div className='box-top-box'>
                                        <p className='box-top-box-font'>여행장 닉네임</p>
                                        <div className='box-top-box-sub'>
                                            <p className='box-top-box-sub-one'>30대</p>
                                            <p className='box-top-box-sub-two'>남자</p>
                                            <p className='box-top-box-sub-three'>한국</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='right-box-content-box-top-font'>친화력 좋은 여행자에요.</p>
                            </div>
                        </div>
                        <button className='chat-button'>채팅하기</button>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Detail;