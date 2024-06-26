import { useRef, useState } from "react"
import GetSchedule from "./GetSchedule";

export default function Write(props : any){

    const modalRef = useRef<HTMLDivElement>(null);

    const [click, setClick] = useState(0);

    return(
        <>
            <div className="write" ref={modalRef}>
                <div className="write-frame"></div>
                <div className="write-start">
                    <div className="write-white">
                        <div className="write-content">
                            <div className="write-content-head">
                                <div className="write-header">
                                    <div className="write-header-title">
                                        <p className="font">"1/3 일정" &nbsp;</p>
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
                                    <div className="write-linegr"></div>
                                    <div className="write-linegr"></div>
                                </div>
                            </div>
                            <div className="write-content-body">
                                <div className="write-body-line">
                                    <div className="write-body-line-font">일정을 선택해주세요.</div>
                                </div>
                                <div className="write-body-sch">
                                    <button className={"write-body-button" + (click == 1 ? "active" : "")} onClick={()=>{click == 0 ? setClick(1) : setClick(0)}}>일정 불러오기</button>
                                    <button className={"write-body-button" + (click == 3 ? "active" : "")} onClick={()=>{click == 0 ? setClick(3) : setClick(0)}}>일정 만들기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                click == 1 ? <GetSchedule click={click} setClick={setClick} write={props.write} setWrite={props.setWrite} ></GetSchedule> : null
            }
        </>
    )
}