import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBringers } from "../thunks/bringersThunks";

export interface Bringers {
  id: number;
}

export interface BringersState {
  data: Bringers[];
  loading: boolean;
  error: string | null;
}

const initialState: BringersState = {
  data: [],
  loading: false,
  error: null,
};

const BringersSlice = createSlice({
  name: "bringers",
  initialState,
  reducers: {
    addBringers: (state, action: PayloadAction<Bringers>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    createAsyncReducer(builder, fetchBringers);
  },
});

const createAsyncReducer = <
  T extends {
    loading: boolean;
    error: string | null;
    status: string;
    data: Bringers[];
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
      (state: T, action: PayloadAction<Bringers[]>) => {
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

export default BringersSlice.reducer;
