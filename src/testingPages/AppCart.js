// import './App.css';
// import Header from '../components1/Header';
// import ProductList from '../components1/ProductList';
// import CartList from '../components1/CartList';
// import { useState, useEffect } from 'react';
// import Axios  from 'axios';


// function AppCart() {

//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     Axios.get("http://localhost:5005/api/item")
//       .then((response) => {
//         setProduct(response.data);
//         // console.log(response.data)
//       })
//       .catch(function (error) {
//         setProduct(error.message + " Please try again later");
//         console.log(
//           "There has been a problem with your fetch operation: " + error.message
//         );
//       });
//   }, [])


//   const [cart, setCart] = useState([])
//   const [showCart, setShowCart] = useState(false)
//   const addToCart = (data) => {
//     setCart([...cart, { ...data, quantity: 1 }])
//   }

//   const handleShow = (value) => {
//     setShowCart(value)
//   }

//   return (
//     <div>
//       <Header count={cart.length}
//         handleShow={handleShow} ></Header>

//       {
//         showCart ?
//           <CartList cart={cart} ></CartList> :
//           <ProductList product={product} addToCart={addToCart} ></ProductList>
//       }


//     </div>
//   );
// }

// export default AppCart;