import Header from "./Header";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";


function App() {

  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const fetchProducts=async()=>{
    const response = await commerce.products.list();
    // console.log(response);
    setProductsList(response.data);
  }

  const addToCart=async(prodId, qty)=>{
    const response = await commerce.cart.add(prodId, qty);
    setCart(response.cart);
  }

  const fetchCart=async()=>{
    setCart(await commerce.cart.retrieve());
  }

  const removeFromCart=async(prodId)=>{
    const response = await commerce.cart.remove(prodId);
    setCart(response.cart);
  }

  const setOrder = (order)=>{
    setOrderDetails(order);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <Router>
      <div className="App">
      <Header cart={cart}/>
        <Switch>

          <Route exact path="/">
            
            <div className="banner">
              <img src="/images/banner.jpg" />
            </div>
            <Product productsList={productsList} addToCart={addToCart}/>
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/cart">
            <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>
          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart} setOrder={setOrder}/>
          </Route>

          <Route exact path="/thankyou">
            <Thankyou orderDetails={orderDetails}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
