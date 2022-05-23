import StarIcon from '@mui/icons-material/Star';
import useFetch from "../../data/useFetch"
import {Link} from "react-router-dom"

const Flavors =(props)=>{

    const {data, error, isPending} = useFetch("http://localhost:8080/flavors")
    console.log(data)
    const dataElement = data.map(item=> {
        return (
            <div key={item.id}
                className="flavors-item">
                <Link className="link flavors-link" to={`/details/${item.id}`}>
                    <img className="image" src={item.image}
                        alt={item.title} />
                </Link>

                    <div className="item-description">
                        <div className="item-rating">
                            <StarIcon/>
                            <p>{(item.rating)}</p>
                        </div>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                    <p>{item.title}</p>
                    <div className="price">
                        <p>${item.price.toFixed(2)}</p>
                        <button className="btn-price" onClick={()=>props.add(item)}>
                            add to cart
                        </button>
                    </div>
                </div>
            
        )
    })
    return(
        <div className="flavors-container">
            <h4>
                FLAVORS
            </h4>
            <div className="flavors">
                {data && dataElement}
                {error && <div>{error}</div>}
                {isPending && <div> ...LOADING </div>}
            </div>
        </div>
    )
}

export default Flavors