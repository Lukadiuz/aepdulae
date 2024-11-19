import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPromotion } from "../thunks/promotionThunks";

export interface Promotion {
  id: number;
  name: string;
  status: string;
  species: string;
}

export interface PromotionState {
  data: Promotion[];
  loading: boolean;
  error: string | null;
}

const initialState: PromotionState = {
  data: [],
  loading: false,
  error: null,
};

const PromotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    addPromotion: (state, action: PayloadAction<Promotion>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    createAsyncReducer(builder, fetchPromotion);
  },
});

const createAsyncReducer = <
  T extends {
    loading: boolean;
    error: string | null;
    status: string;
    data: Promotion[];
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
      (state: T, action: PayloadAction<Promotion[]>) => {
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

export default PromotionSlice.reducer;
