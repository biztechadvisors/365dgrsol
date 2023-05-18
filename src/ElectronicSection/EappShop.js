import { useEffect, useState } from "react";
import LandingPage from "./pages/landing-page";
import Navbar from "./components/navbar";
import CartPage from "./pages/cart";
import OrderPage from "./pages/orderpage/OrderPage";
import WishlistPage from "./pages/wishlistpage/WishlistPage";
import ProductPage from "./pages/productPage/ProductPage";
import store from "../store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ProCategory from "./pages/ProCategory";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          {/* Navbar start */}

          <Route exact path="/EappShop" component={LandingPage} />

          <Route exact path="/products/:id" component={ProductPage} />

          <Route exact path="/ProCategory/:categories" component={ProCategory} />

          <Route exact path="/cart" component={CartPage} />

          <Route exact path="/orders" component={OrderPage} />

          <Route exact path="/wishlist" component={WishlistPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
