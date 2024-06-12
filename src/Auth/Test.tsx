import refreshAPI from "../Utility/TokenRefresher";

function Test(){
    async function Call(){
            refreshAPI.get('/user');
    }

    return(
        <div>
            <button className="ts" onClick={Call}>클릭</button>
        </div>
    )
}

export default Test;