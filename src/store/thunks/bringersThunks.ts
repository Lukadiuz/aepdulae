import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/bringersApiService";

export const fetchBringers = createAsyncThunk(
  "bringers/fetch",
  async (userId: number | string) => {
    const response = await API.fetchBringers(userId);
    return response;
  }
);
