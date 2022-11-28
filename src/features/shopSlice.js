import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    addShop: (state, action) => {
      state.unshift(action.payload);
    },
    editShop: (state, action) => {
      const { id, name, area, category, openingDate, closingDate } =
        action.payload;
      const existingUser = state.find((shop) => shop.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.area = area;
        existingUser.category = category;
        existingUser.openingDate = openingDate;
        existingUser.closingDate = closingDate;
      }
    },
    deleteShop: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((shop) => shop.id === id);
      if (existingUser) {
        return state.filter((shop) => shop.id !== id);
      }
    },
  },
});

export const { addShop, deleteShop, editShop } = shopSlice.actions;
export default shopSlice.reducer;
