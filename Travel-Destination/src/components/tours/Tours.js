
function Tours(props){

    
    return(
        <>
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.info}/>
        </div>
        </>
    )
}

export default Tours;