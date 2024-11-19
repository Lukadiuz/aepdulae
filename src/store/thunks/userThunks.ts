import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/userApiService";

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (userId: number | string) => {
    const response = await API.fetchUser(userId);
    return response;
  }
);
