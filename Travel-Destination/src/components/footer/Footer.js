function Footer(props)
{  let urlFacebook="https://web.facebook.com/habosh.ana.77";
    let urlLinkedin="https://www.linkedin.com/feed/";
    return(
        <>
        <p>Follow Us:</p>
        <a href={urlFacebook}>FaceBook</a>
        <a href={urlLinkedin}>LinkedIn</a>
        <p style={{color:"purble"}}>Authors:HebaAlhamaydah saraAltayeh</p>
        </>
    )
}
export default Footer;