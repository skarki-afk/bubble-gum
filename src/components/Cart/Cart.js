import Navbar from "../Home/Navbar";
import CartDetails from "./CartDetail";

const Cart = (props) => {
    return(
        <div>
            <Navbar cart={props.cart}/>
            <CartDetails cart={props.cart} add={props.add} remove={props.remove} delete={props.delete}/>
        </div>
    )
}

export default Cart;