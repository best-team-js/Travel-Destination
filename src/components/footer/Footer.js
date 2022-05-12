function Footer()
{  let urlFacebook="https://web.facebook.com/habosh.ana.77";
    let urlLinkedin="https://www.linkedin.com/feed/";
    return(
        <>
        <p><h2>Follow Us:</h2></p>
        <a href={urlFacebook}>FaceBook</a>
        <br/>
        <a href={urlLinkedin}>LinkedIn</a>
        <p style={{color:"purble"}}><h2>Authors:</h2>HebaAlhamaydah saraAltayeh</p>
        <p>© copyright all rights reserved </p>
        </>
    )
}
export default Footer;