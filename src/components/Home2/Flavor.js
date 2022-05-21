import StarIcon from '@mui/icons-material/Star';
import useFetch from "../../data/useFetch"

const Flavors =(props)=>{

    const {data, error, isPending} = useFetch()
    console.log(data)
    const dataElement = data.map(item=> {
        return (
            <div key={item.id}
            className="flavors-item">
                <img className="image" src={item.image}
                    alt={item.title} />

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