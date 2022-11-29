import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopArray: [],
  filterArray: [],
  search: "",
};

const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    successShops: (state, action) => {
      state.shopArray = action.payload;
      return {
        shopArray: action.payload,
        filterArray: [...action.payload],
      };
    },
    addShop: (state = initialState, action) => {
      state.shopArray.unshift(action.payload);
    },
    editShop: (state, action) => {
      const { id, name, area, category, openingDate, closingDate } =
        action.payload;
      const existingUser = state.shopArray.find((shop) => shop.id === id);
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
      const existingUser = state.shopArray.find((shop) => shop.id === id);
      if (existingUser) {
        return state.shopArray.filter((shop) => shop.id !== id);
      }
    },
    filteredShops: (state, action) => {
      const filterArray = state.shopArray.filter((shop) =>
        shop.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filterArray:
          action.payload.length > 0 ? filterArray : [...state.shopArray],
      };
    },
  },
});

export const { addShop, deleteShop, editShop, filteredShops } =
  shopSlice.actions;
export default shopSlice.reducer;
