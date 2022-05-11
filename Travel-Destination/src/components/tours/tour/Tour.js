import { useState } from "react";


function Tour(props) {

    const [isopened, setIsopened] = useState(false);
    
    function getInfo() {
        setIsopened(!isopened);
        props.card(isopened);
    }
    return (
        <>
            <div>
                <p>{props.name}</p>
                <img src={props.image} alt={props.info} />
                <button style={{ backgroundColor: "pink" }}>{isopened ? "Closed" : "Opend"}</button>
                <button onClick={getInfo}>more info</button>
            </div>
        </>
    )
}

export default Tour;