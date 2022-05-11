function Tour(props){
    return(
        <>
        <div>
            <p>{props.name}</p>
            <img src={props.image} alt={props.info}/>
        </div>
        </>
    )
}

export default Tour;