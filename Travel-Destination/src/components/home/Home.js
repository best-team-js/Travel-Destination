import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import database from '../../data/db.json';

function Home() {
    return(
    <>
<Header/>
<Tours/>

{
    database.map(db => {
        return(
            <Tours  name={db.name} image={db.image}/>
        )
    })
}

<Footer/>
    </>
    )
}

export default Home;