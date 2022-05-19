import Flavors from './Flavors';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';

function Home(props) {
  return (
    <div className="App">
      <Navbar cart={props.cart}/>
      <Main/>
      <Flavors cart={props.cart} add={props.add}/>
      <Footer />
    </div>
  );
}

export default Home;
