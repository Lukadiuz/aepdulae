import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNews } from "../thunks/newsThunks";

export interface News {
  id: number;
}

export interface NewsState {
  data: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  data: [],
  loading: false,
  error: null,
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<News>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    createAsyncReducer(builder, fetchNews);
  },
});

const createAsyncReducer = <
  T extends {
    loading: boolean;
    error: string | null;
    status: string;
    data: News[];
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
      (state: T, action: PayloadAction<News[]>) => {
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

export default NewsSlice.reducer;
