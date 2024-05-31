import { useRef } from "react";

function Valid(){
    const modalRef = useRef<HTMLDivElement>(null);
    const modalOutClick = (e : any) => {
        if(modalRef.current === e.target){
            
        }
    }

    return(
        <div className="valid" ref={modalRef} onClick={(e)=>{modalOutClick(e)}}>

        </div>
    )
}

export default Valid;