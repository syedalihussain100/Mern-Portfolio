import { configureStore } from "@reduxjs/toolkit";
import { LoginReducer, UserReducer, UpdateReducer } from "./reducers/user";

const Store = configureStore({
  reducer: {
    user: UserReducer,
    login: LoginReducer,
    update: UpdateReducer,
  },
});

export default Store;
