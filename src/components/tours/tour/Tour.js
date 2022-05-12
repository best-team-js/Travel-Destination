function Tour(props) {
    return (
        <>
            <div>
                <p>{props.dataWithKey.name}</p>
                <img src={props.dataWithKey.image} alt="seen" />
               
            </div>
        </>
    )
}

export default Tour;