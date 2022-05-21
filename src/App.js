import { useState,useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart/Cart";
import Home from './components/Home/Home';
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home2 from "./components/Home2/Home2"
import Checkout from "./components/Cart/Checkout";

function App() {
  const storedCart = JSON.parse(localStorage.getItem("cart") || '[]')
  const [cart,setCart] = useState(storedCart)
  // console.log(cart)
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  }
  ,[cart])

  const itemsPrice = cart.reduce((a,c) => a + c.price * c.quantity, 0)
  const shipping = 10;
  const totalPrice = itemsPrice + shipping;

  const onAdd =(product)=>{
    const exist = cart.find(x=> x.id === product.id)
    if(exist) {
      setCart(cart.map(x => x.id === product.id? {...exist, quantity: exist.quantity + 1}: x))
    }
    else{
      setCart([...cart,{...product, quantity: 1}])
    }
  }

  const onRemove =(product)=>{
    const exist = cart.find(x=> x.id === product.id)
    if(exist.quantity === 1) {
      setCart(cart.filter((x)=> x.id !== product.id))
    }
    else{
      setCart(cart.map(x => x.id === product.id? {...exist, quantity: exist.quantity - 1}: x))
    }
  }
  const handleDelete =(product)=>{
    setCart(prevCart => prevCart.filter(x=> x.id !== product.id))
}
  // const onRemove = (product) =>{
  //   cart.map(x => {
  //     if(x.quantity === 1){
  //       setCart(prevCart => prevCart.filter(x => x.id !== product.id))
  //       // setCart(prevCart => prevCart.map(x=> x.id === product.id? {...x, quantity: 1}: x))
  //     }
  //     else{
  //       setCart(cart.map(x=> x.id === product.id? {...x, quantity: x.quantity === 1 ? 1 : x.quantity - 1 }: x))
  //     }
  //     return x
  //   })
  // }

    return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home2 cart={cart} add={onAdd}/>}></Route> 
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path='/home' element={<Home cart={cart} add={onAdd}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} add={onAdd} delete={handleDelete} remove={onRemove} itemsPrice={itemsPrice} shipping={shipping} totalPrice={totalPrice}/>}></Route>
        <Route path="/checkout" element={<Checkout itemsPrice={itemsPrice} shipping={shipping} totalPrice={totalPrice}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
