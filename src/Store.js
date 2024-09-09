import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Features/Account/accountSlice";
import customerReducer from "./Features/Customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
