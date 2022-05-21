import "./checkout.css"
import LockIcon from '@mui/icons-material/Lock';

const Checkout = (props) =>{
    return(
        <div className="checkout">
            <div className="cards">
                <h3 className="cards-title cards-border">
                    Pay with
                </h3>
                <form className="card-form">
                    <div className="cards-item cards-border">
                        <input type="radio" id="mastercard" name="payment" value="mastercard" />
                        <label htmlFor="mastercard"><img width= "55px" src="https://brandlogos.net/wp-content/uploads/2011/08/mastercard-logo.png"/></label>
                    </div>
                    <div className="cards-item cards-border">
                        <input type="radio" id="paypal" name="payment" value="paypal" />
                        <label htmlFor="paypal"><img width= "55px" src="https://brandlogos.net/wp-content/uploads/2015/11/paypal-logo-preview.png"/></label>
                    </div>
                    <div className="cards-item cards-border">
                        <input type="radio" id="visa" name="payment" value="visa" />
                        <label htmlFor="visa"><img width= "55px" src="https://brandlogos.net/wp-content/uploads/2013/06/visa-us-vector-logo.png"/></label>
                    </div>
                </form>
                
            </div>
            <div className="payment cards-border">
                <div className="payment-item">
                    <div >
                        items-price
                    </div>
                    <div>
                        $ {props.itemsPrice.toFixed(2)}
                    </div>
                </div>
                <div className="payment-item">
                    <div >
                        shipping
                    </div>
                    <div>
                        $ {props.shipping.toFixed(2)}
                    </div>
                </div>
                <div className="border">

                </div>
                <div className="payment-item">
                    <div className="payment-total">
                        total price
                    </div>
                    <div>
                        $ {props.totalPrice.toFixed(2)}
                    </div>
                </div>
                <div className="payment-btn-div">
                    <button className="payment-btn">
                        <LockIcon/>confirm and pay
                    </button>
                </div>
            </div>
            <div className="address">
                    <div className="address-title"> address</div>
                    <textarea id="address" name="address" rows="10" cols="40" required>
                        
                    </textarea>
            </div>
        </div>
    )
}

export default Checkout;