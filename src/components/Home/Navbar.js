import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';
import "../../index.css"

const Navbar =(props)=>{
    return (
        <div className="navbar">
            <Link className="link" to='/home'>
                <div className="logo">
                    logo
                </div>
            </Link>
            <div className="mid">
                <Link className="link" to="/home">
                    <li className="mid-list">home</li>
                </Link>
                <li className="mid-list">about us</li>
                <li className="mid-list ">product</li>
                <li className='mid-list'>
                    <Badge badgeContent = {props.cart.length} color = "primary">
                        <Link className='link' to='/cart'>
                            <ShoppingCartIcon className='cart-icon'/>
                        </Link>
                    </Badge>
                </li>
                {/* <button className="btn btn-shop">
                    shop
                </button> */}
                {/* <Badge badgeContent = {props.cart.length} color = "primary">
                    <Link className='link' to='/cart'>
                        <ShoppingCartIcon className='cart-icon'/>
                    </Link>
                </Badge> */}
                <Link to="/">
                    <LogoutIcon className='logout'/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar