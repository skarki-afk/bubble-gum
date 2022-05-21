import Flavors from './Flavor';
import Footer from '../Home/Footer';
import Main from './Main';
import Navbar from './Navbar2';

function Home2(props) {
  return (
    <div className="App">
      <Navbar cart={props.cart}/>
      <Main/>
      <Flavors cart={props.cart} add={props.add}/>
      <Footer />
    </div>
  );
}

export default Home2;
