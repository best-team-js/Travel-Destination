import { Link }from 'react-router-dom';

function NavBar(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <nav>
        <Link to="/city/:id">Tour</Link>
        </nav>
        </>
    )
}

export default NavBar;