import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./slices/serviceSlice";

export default configureStore({
  reducer: {
    services: serviceReducer,
  },
});
