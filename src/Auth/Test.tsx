import refreshAPI from "../Utility/TokenRefresher";

function Test(){
    async function Call(){
            refreshAPI.get('').then((response)=>{
            });
    }

    return(
        <div>
            <button className="ts" onClick={Call}>클릭</button>
        </div>
    )
}

export default Test;