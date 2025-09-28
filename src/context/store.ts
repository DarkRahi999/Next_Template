import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/userSlice";

//W---------={ Store }=----------</br>
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

//W---------={ RootState and AppDispatch }=----------</br>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
