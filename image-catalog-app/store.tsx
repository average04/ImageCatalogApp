import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import imageSlice from "./slice/ImageSlice";
import modalSlice from "./slice/ModalSlice";

export const store = configureStore({
  reducer: {
    image: imageSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
