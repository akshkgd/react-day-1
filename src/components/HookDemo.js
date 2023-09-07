import { useState } from "react";
function HookDemo(){
    let [cardStatus, setCardStatus] = useState(false);
    let [btnStatus, setBtnStatus] = useState(true)
    function displayCardHandler(){
        setCardStatus(true);
        setBtnStatus(false)
    }
    function hideCardHandler(){
        setCardStatus(false)
        setBtnStatus(true)
    }
    return(
        <div className="App">
            <h1>This is a useState Demo</h1>
            {
                btnStatus == true ? <button onClick={displayCardHandler} className="btn">Show Card</button> : <button onClick={hideCardHandler} className="btn">Hide Card</button>
            }
            <div className={cardStatus==true ? "demo-card" : "d-none"}>
                <img src="https://source.unsplash.com/1600x1000/?india"/>
                <h3>Explore the diversity of india</h3>
                <p className="desc">India, diverse nation, rich culture, ancient history, vibrant traditions, breathtaking landscapes, bustling cities, and warm hospitality.</p>
            </div>
        </div>
    )
}
export default HookDemo;