import Navbar from "./Navbar"
import Footer from "./Footer"
import StarIcon from '@mui/icons-material/Star';
import useFetch from "../../data/useFetch"
import { useParams } from "react-router-dom";


const ProductDetail =(props)=>{
const {id} = useParams();
const {data} = useFetch("http://localhost:8080/flavors/" + id)
return(
    <div>
        <Navbar cart={props.cart}/>
        <div key={data.id} className="detail-container">
            <img className="container-img" src={data.image}/>
            <div className="container-desc">
                <h3 className="container-title">
                    {data.title}
                </h3>
                <p className="container-para">
                    {data.description}
                </p>
                <div className="container-rating">
                    <span>${data.price}</span>
                    <span className="container-star">
                        <StarIcon/>
                        {data.rating}
                    </span>
                </div>
                <button className="btn-price" onClick={()=>props.add(data)}>
                    add to cart
                </button>
            </div>

        </div>

        <Footer />
    </div>
    )
}

export default ProductDetail