import { useState } from "react";
// import Tour from "../tours/tour/Tour";

function TourDetails(){

    const [card, setCard] = useState("open");

    function info(isOpened){
        isOpened? setCard("open") : setCard("close")
    }
    return(
        <>
        <div>
            <p>open {card}</p>
            <button Open={info}/>
            {/* <button onClick={card}>More Details</button> */}
        </div>
        </>
    )
}

export default TourDetails;