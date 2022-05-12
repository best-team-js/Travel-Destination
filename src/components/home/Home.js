import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';

function Home(props) {
    return (
        <>
            <Header />
            <Tours tourData={props.data} />
            <Footer />
        </>
    );

}

export default Home;