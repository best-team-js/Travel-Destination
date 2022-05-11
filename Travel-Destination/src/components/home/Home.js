
import Header from './components/header/Header';
import Tours from './src/components/tours/Tours';
import Footer from './src/components/footer/Footer';
import database from './src/data/db.json';

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