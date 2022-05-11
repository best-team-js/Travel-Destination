import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';
import database from '../../data/db.json';

function Home() {
    return(
    <>
<Header/>
{
    database.map(db => {
        return(
            <Tours  name={db.name} info ={db.info} image={db.image} />
        )
    })
}
<Footer/>
    </>
    );

}

export default Home;