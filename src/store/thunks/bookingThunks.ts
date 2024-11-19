import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/bookingApiService";

export const fetchBooking = createAsyncThunk(
  "booking/fetch",
  async (userId: number | string) => {
    const response = await API.fetchBooking(userId);
    return response;
  }
);
