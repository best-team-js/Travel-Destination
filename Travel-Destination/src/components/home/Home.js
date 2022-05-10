import Header from './components/Header';
import Tours from './components/Tours';
import Footer from './components/Footer';
import database from './data/db.json';

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