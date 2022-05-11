
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import database from '../../data/db.json';

function Home() {
    return(
    <>
<Header/>
<Tours/>
<Footer/>

{
    database.map(db => {
        return(
            <Tours  name={db.name} image={db.image}/>
        )
    })
}
    </>
    )
}

export default Home;