import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/workOrdersApiService";

export const fetchWorkOrders = createAsyncThunk(
  "work-order/fetch",
  async (userId: number | string) => {
    const response = await API.fetchWorkOrders(userId);
    return response;
  }
);
