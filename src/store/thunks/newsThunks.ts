import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/newsApiService";

export const fetchNews = createAsyncThunk(
  "news/fetch",
  async (userId: number | string) => {
    const response = await API.fetchNews(userId);
    return response;
  }
);
