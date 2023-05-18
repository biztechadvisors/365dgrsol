import CartDisplayProduct from "../../components/cart-display-product/CartDisplayProduct";
import { useEffect, useState } from "react";
import { Modal } from "@material-ui/core";
import "./CartPage.css";
import { Link } from "react-router-dom";
import {
  getCart,
  removeItemFromCart,
  addOrderArr,
} from "../../../store/eshopSlice";
import { useDispatch, useSelector } from "react-redux";


// RazorPay_____________________

async function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const __DEV__ = document.domain === 'localhost'

// Razor End_____________________



function CartPage() {
  const { setCartItemsCount } = useSelector((state) => state.cart);

  const convert = (str) => {
    if (!str) return 0; // check if input string is empty or undefined
    let res = str.replace(/\D/g, "");
    return parseInt(res);
  };

  const [cartItems, setCartItems] = useState(getCart() || []);

  console.log(cartItems);

  const [totalPrice, setTotalPrice] = useState(0);

  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("userAddress")) || {
      address: "",
      locality: "",
      city: "",
      state: "",
      pincode: "",
      landmark: "",
      isthere: false,
    }
  );

  const [open, setOpen] = useState(false);
  const [orderPlaceOpen, setOrderPlaceOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOrderOpen = () => {
    setOrderPlaceOpen(true);
  };

  const handleOrderClose = () => {
    setOrderPlaceOpen(false);
  };

  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeItemFromCart(id));
    dispatch(setCartItems(getCart()));
    dispatch(setCartItemsCount((prevCount) => prevCount - 1));
  }

  const handleOrder = () => {
    handleOrderOpen();
    handleOpen();
    dispatch(addOrderArr(cartItems));
    dispatch(localStorage.setItem("cartItems", JSON.stringify([])));
    setCartItems([]);
    dispatch(setCartItemsCount(getCart().length));
  };

  function calculateTotalPrice() {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.quantity) * convert(item.price);
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>No Items In Cart</h1>
        <Modal
          open={orderPlaceOpen}
          onClose={handleOrderClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div
            className="orderPlaced__mastercontainer"
            onClick={handleOrderClose}
          >
            <div
              className="orderPlacedClip__container"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h1>Order Successfully Placed!!</h1>
              <Link to="/orders">
                <button className="orderPlacedClip__button">See Orders</button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

// RazorPay -----

  async function displayRazorpay() {
    const isRazorpayLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!isRazorpayLoaded) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }
  
    try {
      const res = await fetch('http://biztekminds.com/mycoolapp/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: totalPrice
        })
      })
  
      const data = await res.json()
      const options = {
        key: __DEV__ ?  'rzp_test_G3jd9GdCpbvmdr': 'PRODUCTION_KEY',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'My Cool App',
        description: 'Payment for items',
        image: '/logo.svg',
        handler: function (response) {
          alert(response.razorpay_payment_id)
          alert(response.razorpay_order_id)
          alert(response.razorpay_signature)
        },
        prefill: {
          name: 'Ajay',
          email: 'sdfdsjfh2@ndsfdf.com',
          phone_number: '9899999999'
        }
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } catch (error) {
      console.error(error)
      alert('Failed to fetch data from the server.')
    }
  }

  // RazorPay  End-------

  return (
    <div className="cart-page">
      <div className="cart-page-left">
        <div className="cart-page-left-header">
          <h1>My Cart({cartItems.length})</h1>
          <div className="address-container">
            {address.isthere === false ? (
              <>
                <button onClick={handleOpen} className="add-address-cart">
                  Add Address
                </button>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="lightblue"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                Deliver to
                <h1 className="cart-page-left-header-address">
                  {address.address}
                </h1>
                <button onClick={handleOpen} className="edit-address">
                  Edit Address
                </button>
              </>
            )}
          </div>
        </div>

        {cartItems.map((item) => (
          <CartDisplayProduct
            key={item.id}
            id={item.id}
            name={item.name}
            image={`${item.img}`} // make sure the image path is correct
            price={item.price}
            rating={item.rating}
            quantity={item.quantity}
            handleRemove={handleRemove}
            setCartItems={setCartItems}
            style={{ width: "100px", height: "100px" }} // add styling for the image element
          />
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="addressForm" onClick={handleClose}>
          <form
            action=""
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();

              setOpen(false);
              localStorage.setItem(
                "userAddress",
                JSON.stringify({ ...address, isthere: true })
              );
              setAddress(JSON.parse(localStorage.getItem("userAddress")));
            }}
          >
            <input
              type="text"
              placeholder="Address*"
              required
              name="address"
              value={address.address}
              onChange={(e) =>
                setAddress((s) => ({
                  ...address,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <div className="input__container">
              <input
                type="text"
                placeholder="Locality*"
                required
                name="locality"
                value={address.locality}
                onChange={(e) =>
                  setAddress((s) => ({
                    ...address,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                placeholder="Pincode*"
                name="pincode"
                required
                value={address.pincode}
                onChange={(e) =>
                  setAddress((s) => ({
                    ...address,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="input__container">
              <input
                type="text"
                placeholder="City*"
                name="city"
                required
                value={address.city}
                onChange={(e) =>
                  setAddress((s) => ({
                    ...address,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                placeholder="State*"
                name="state"
                required
                value={address.state}
                onChange={(e) =>
                  setAddress((s) => ({
                    ...address,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <input
              type="text"
              name="landmark"
              placeholder="LandMark (Optional)"
              value={address.landmark}
              onChange={(e) =>
                setAddress((s) => ({
                  ...address,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px",
              }}
            >
              <button type="submit" className="add-address">
                Add Address
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="cart-page-right">
        <h1 className="cart-price-details">PRICE DETAILS</h1>
        <hr className="plane-hr" />
        <div className="cart-price">
          <h1>Price ({cartItems.length})</h1>
          <h1>₹{totalPrice * 1.25}</h1>
        </div>
        <div className="cart-discount">
          <h1>Discount</h1>
          <h1 className="disc">25%</h1>
        </div>
        <div className="cart-delivery-charges">
          <h1>Delivery Charges</h1>
          <h1 className="disc">Free</h1>
        </div>

        <hr className="dashed-hr" />
        <div className="cart-total">
          <h1 className="total-amt">Total Amount</h1>
          <h1>₹{totalPrice}</h1>
        </div>
        <div className="place-order-div">
          <button onClick={handleOrder} className="place-order">
            Place Order
          </button>
          <button onClick={displayRazorpay} className="place-order">
           Pay online
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
