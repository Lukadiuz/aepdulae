import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWorkOrders } from "../thunks/workOrdersThunks";

export interface WorkOrder {
  id: number;
}

export interface WorkOrderState {
  data: WorkOrder[];
  loading: boolean;
  error: string | null;
}

const initialState: WorkOrderState = {
  data: [],
  loading: false,
  error: null,
};

const workOrderSlice = createSlice({
  name: "workOrder",
  initialState,
  reducers: {
    addWorkOrder: (state, action: PayloadAction<WorkOrder>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    createAsyncReducer(builder, fetchWorkOrders);
  },
});

const createAsyncReducer = <
  T extends {
    loading: boolean;
    error: string | null;
    status: string;
    data: WorkOrder[];
  }
>(
  builder: any,
  asyncThunk: any
) => {
  builder
    .addCase(asyncThunk.pending, (state: T) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      asyncThunk.fulfilled,
      (state: T, action: PayloadAction<WorkOrder[]>) => {
        state.loading = false;
        state.data = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
      }
    )
    .addCase(asyncThunk.rejected, (state: T, action: any) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
};

export default workOrderSlice.reducer;
