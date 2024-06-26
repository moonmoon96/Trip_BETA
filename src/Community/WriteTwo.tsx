import { useRef, useState } from "react"

export default function WriteTwo(props : any){

    const modalRef = useRef<HTMLDivElement>(null);

    const [inputTitleCount, setInputTitleCount] = useState(0);
    const [inputContentCount, setInputContentCount] = useState(0);

    const onTitleHandler = (e : any) => {
        setInputTitleCount(e.target.value.length);
    }

    const onContentHandler = (e: any) => {
        setInputContentCount(e.target.value.length);
    }

    return(
        <div className="write" ref={modalRef}>
            <div className="write-frame"></div>
            <div className="write-start">
                <div className="write-white">
                    <div className="write-content2">
                        <div className="write-content-head">
                            <div className="write-header">
                                <div className="write-back" onClick={()=>{props.setCheck(0)}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 3L7 12L16 21" stroke="#252525" stroke-width="1.5"></path></svg>
                                </div>
                                <div className="write-header-title">
                                    <p className="font">"2/3 모집 상세" &nbsp;</p>
                                    <span className="write-header-title-sub">
                                        (필수)
                                    </span>
                                </div>
                                <div className="write-xx" onClick={()=>{props.setWrite(0)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" cursor="pointer"><path d="M4 4L20 20" stroke="#252525" stroke-width="1.5"></path><path d="M20 4L4 20" stroke="#252525" stroke-width="1.5"></path></svg>
                                </div>
                            </div>
                            <div className="write-line">
                                <div className="write-linegreen"></div>
                                <div className="write-linegreen"></div>
                                <div className="write-linegr"></div>
                            </div>
                        </div>
                        <div className="write-content-body">
                            <div className="write-content-bodycheck">
                                <div className="bodycheck-title">
                                    <div className="bodycheck-titlefont">
                                        제목
                                    </div>
                                    <p className={(inputTitleCount > 0 && inputTitleCount <5 ? 'bodycheck-titlecountred' : inputTitleCount >= 5 ? 'bodycheck-titlecountgreen' : 'bodycheck-titlecount')}>
                                        ({inputTitleCount}/100)
                                    </p>                                    
                                </div>
                                <div className="write-titlebody">
                                    <div className={"write-titlebody-ex" + (inputTitleCount != 0 ? 'no' : '')}>
                                        <span className={"write-titlebody-exfont"}>ex. 12월 3박 4일 제주 바다 보러가실 3분 구해요.</span>
                                        <div className={"write-titlebody-exsub"}>(최소 5자 이상 / 최대 100자 이내)</div>
                                    </div>                                
                                    <textarea className="write-titlebody-text" name="title" maxLength={100} onChange={onTitleHandler}></textarea>
                                </div>
                                <div className="write-titlebody-pad"></div>
                            </div>
                            <div className="controlheight"></div>
                            <div className="bodycheck-title">
                                <div className="bodycheck-titlefont">
                                    내용
                                </div>
                                <p className={(inputContentCount > 0 && inputContentCount <20 ? 'bodycheck-titlecountred' : inputContentCount >= 20 ? 'bodycheck-titlecountgreen' : 'bodycheck-titlecount')}>
                                    ({inputContentCount}/1000)
                                </p>                                    
                            </div>
                            <div className="write-titlebody">
                                <div className={"write-titlebody-ex2" + (inputContentCount != 0 ? 'no' : '')}>
                                    <span className="write-titlebody-exfont">ex. 혼자에요, 맛집 탐방을 좋아하는 분들 찾아요! 걸어서 맛집 탐방 하려고 합니다^^</span>
                                    <div className="write-titlebody-exsub">(최소 20자 이상 / 최대 1000자 이내)</div>
                                </div>
                                <textarea className="write-content-text" name="content" maxLength={1000} onChange={onContentHandler}></textarea>
                                <div className="controlpad"></div>
                            </div>
                            <div className="write-photo">
                                <div className="write-photo-main">
                                    <div className="write-photo-show">
                                        <input className="write-img"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="write-footer">
                            <button className={"write-button" + (inputTitleCount >= 5 && inputContentCount >= 20 ? "act" : "")}>
                                <span className="write-button-text">다음</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
