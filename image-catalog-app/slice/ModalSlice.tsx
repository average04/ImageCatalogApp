import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

import { ModalProps } from "./types";

const initialState: ModalProps = {
  show: false,
  header: <h1></h1>,
  body: <div></div>,
  footer: <div></div>,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    },
    setHeader: (state, action) => {
      state.header = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setFooter: (state, action) => {
      state.footer = action.payload;
    },
  },
});

export const { showModal, hideModal, setHeader, setBody, setFooter } =
  modalSlice.actions;

export default modalSlice.reducer;
