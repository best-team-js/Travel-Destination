import NavBar from "../Navbar/Navbar";


function Header(props){
    let colorMode="pink";
    return(
        <>
        <NavBar></NavBar>
        <h1 style={{color:colorMode}}>welcome to travel destination </h1>
        </>
    )
}
export default Header;