import "./cart.css"
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

const CartDetails = (props) =>{
    const itemsPrice = props.cart.reduce((a,c) => a + c.price * c.quantity, 0)
    const shipping = 10;
    const totalPrice = itemsPrice + shipping;
    return(
        <div className="cart">
            <div className="cart-title">
                <h3> Order Details</h3>
            </div>
            <div className="cart-subtitle">
                <h2>My Bag</h2>
            </div>
            {props.cart.length === 0 && <div className="empty-cart">Your cart is empty...</div>}

            {props.cart.length !== 0 && 
            props.cart.map(item => {
                return ( 
                <div key={item.id} className="break"> 
                    <div className="order">
                        <img className="order-image" src = {item.image}/>
                        <div className="order-details">
                            <h4 className="order-title">{item.title}</h4>
                            <p className="order-price">$ {item.price} 
                            <span className="star">
                                <StarIcon/> {item.rating}
                            </span>
                            </p>
                            <p className="order-description">{item.description}</p>
                            <div className="order-operand">
                                <div className="order-operation"> 
                                    <span className="add operate" onClick={()=> props.add(item)}>+</span>
                                    {item.quantity}
                                    <span className="sub operate" onClick={()=> props.remove(item)}>-</span>
                                </div>
                                <DeleteIcon className="delete" onClick={()=> props.delete(item)} />
                            </div>
                        </div>
                    </div> 
                </div>
                )
            })
            }

            
            {props.cart.length !==0 && 
            <div className="summary">
                <h4 className="summary-title">Order Info:</h4>
                <div className="price-collection">
                    <div className="summary-price">
                        <h4>items price :</h4> <div>$ {itemsPrice.toFixed(2)} </div>
                    </div>
                    <div className="summary-price">
                        <h4>shipping :</h4> <div>$ {shipping.toFixed(2)} </div>
                    </div>
                    <div className="border">

                     </div>
                    <div className="summary-price">
                        <h4>total price :</h4> <div>$ {totalPrice.toFixed(2)} </div>
                    </div>
                </div>
            </div>}

            {props.cart.length !==0 && 
            <div className="btn-space">
                <button className="summary-btn">
                    checkout
                </button>
            </div>}
        </div>
    )
}

export default CartDetails