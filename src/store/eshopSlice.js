import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    orderItems: JSON.parse(localStorage.getItem("orderItems")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    isSignedIn: localStorage.getItem("isSignedIn") || "",
    cartItemsCount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      const idToRemove = action.payload;
      const newState = state.cartItems.filter((item) => item.id !== idToRemove);
      localStorage.setItem("cartItems", JSON.stringify(newState));
      state.cartItems = newState;
    },
    reduceItemQuantity: (state, action) => {
      const idToReduce = action.payload;
      const itemToReduce = state.cartItems.find(
        (item) => item.id === idToReduce
      );
      if (itemToReduce && itemToReduce.quantity > 1) {
        itemToReduce.quantity--;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    addItemQuantity: (state, action) => {
      const idToAdd = action.payload;
      const itemToAdd = state.cartItems.find((item) => item.id === idToAdd);
      if (itemToAdd) {
        itemToAdd.quantity++;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    addOrderItem: (state, action) => {
      const newItem = action.payload;
      const itemExists = state.orderItems.some(
        (item) => item.id === newItem.id
      );
      if (!itemExists) {
        state.orderItems.push(newItem);
        localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
      }
    },
    addOrderArr: (state, action) => {
      const newItems = action.payload;
      state.orderItems.push(...newItems);
      localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
    },
    addItemToWishlist: (state, action) => {
      const newItem = action.payload;
      const itemExists = state.wishlist.some((item) => item.id === newItem.id);
      if (!itemExists) {
        state.wishlist.push(newItem);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeItemFromWishlist: (state, action) => {
      const idToRemove = action.payload;
      const newState = state.wishlist.filter((item) => item.id !== idToRemove);
      localStorage.setItem("wishlist", JSON.stringify(newState));
      state.wishlist = newState;
    },
    itemPresentInWishlist: (state, action) => {
      const id = action.payload;
      const list = state.wishlist;
      let flag = false;

      list.forEach((item) => {
        if (item?.id === id) flag = true;
      });
      return flag;
    },
    setOrders: (state, action) => {
      localStorage.setItem("orderItems", JSON.stringify(action.payload));
      state.orderItems = action.payload;
    },
    setWishlist: (state, action) => {
      localStorage.setItem("wishlist", JSON.stringify(action.payload));
      state.wishlist = action.payload;
    },
    setCart: (state, action) => {
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
      state.cartItems = action.payload;
    },
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
      localStorage.setItem("isSignedIn", action.payload);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
    },
    setCartItemsCount: (state, action) => {
      state.cartItemsCount = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  reduceItemQuantity,
  addItemQuantity,
  addOrderItem,
  addOrderArr,
  addItemToWishlist,
  removeItemFromWishlist,
  itemPresentInWishlist,
  setOrders,
  setWishlist,
  setCart,
  setIsSignedIn,
  setCartItems,
  setCartItemsCount,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;
export const selectOrders = (state) => state.orders;
export const selectWishlist = (state) => state.wishlist;

export const getWishlist = () => {
  if (localStorage.getItem("wishlist"))
    return JSON.parse(localStorage.getItem("wishlist"));

  localStorage.setItem("wishlist", JSON.stringify([]));
  return [];
};

export const getCart = () => {
  if (localStorage.getItem("cartItems"))
    return JSON.parse(localStorage.getItem("cartItems"));

  localStorage.setItem("cartItems", JSON.stringify([]));
  return [];
};

export const getOrders = () => {
  if (localStorage.getItem("orderItems"))
    return JSON.parse(localStorage.getItem("orderItems"));
};

export default cartSlice.reducer;
