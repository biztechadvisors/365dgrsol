import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./eServices/cartSlice";
import { interiorApi } from "./servicesInterior";
import { actApi } from "./servicesActivities";
import { proApi } from "./servicesGadgets";
import dataReducer from "./componentSlice/electronicsSlice";
import propertyReducer from "./componentSlice/eventorganiserSlice";
import cartReducer from "./eshopSlice";

const store = configureStore({
  // Define the reducers to be used in the store
  reducer: {
    cart: cartReducer, // Cart slice reducer
    data: dataReducer, // Electronics slice reducer
    property: propertyReducer, // Event organizer slice reducer

    // Add reducers for external APIs using their respective reducer paths
    [proApi.reducerPath]: proApi.reducer, // Gadgets API reducer
    [interiorApi.reducerPath]: interiorApi.reducer, // Interior services API reducer
    [actApi.reducerPath]: actApi.reducer, // Activities API reducer
  },

  // Define the middleware to be used in the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      proApi.middleware, // Gadgets API middleware
      interiorApi.middleware, // Interior services API middleware
      actApi.middleware // Activities API middleware
    ),
});

export default store;
