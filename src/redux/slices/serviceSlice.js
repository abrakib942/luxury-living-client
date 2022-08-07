import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const res = await axios.get("http://localhost:5000/service");
    return res.data;
  }
);

export const serviceSlice = createSlice({
  name: "services",
  initialState: {
    isLoading: false,
    services: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.services = action.payload;
      state.error = null;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.isLoading = false;
      state.services = [];
      state.error = action.error.message;
    });
  },
});

export default serviceSlice.reducer;
