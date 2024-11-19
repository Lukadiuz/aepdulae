import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/promotionApiService";

export const fetchPromotion = createAsyncThunk(
  "promotion/fetch",
  async (userId: number | string) => {
    const response = await API.fetchPromotion(userId);
    return response;
  }
);
