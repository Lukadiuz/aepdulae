// src/features/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import workOrderReducer from "./reducers/workOrderSlice";
import bookingReducer from "./reducers/bookingSlice";
import bringersReducer from "./reducers/bringersSlice";
import newsReducer from "./reducers/newsSlice";
import promotionReducer from "./reducers/promotionSlice";

const store = configureStore({
  reducer: {
    workOrder: workOrderReducer,
    booking: bookingReducer,
    bringers: bringersReducer,
    user: userReducer,
    news: newsReducer,
    promotion: promotionReducer,
  },
});

// กำหนด RootState และ AppDispatch types สำหรับใช้ทั่วแอป
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
