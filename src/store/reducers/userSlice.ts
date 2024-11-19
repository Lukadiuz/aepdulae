import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/userThunks";

export interface User {
  id: number;
  name: string;
  status: string;
  species: string;
}

export interface UserState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    createAsyncReducer(builder, fetchUser);
  },
});

const createAsyncReducer = <
  T extends {
    loading: boolean;
    error: string | null;
    status: string;
    data: User[];
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
      (state: T, action: PayloadAction<User[]>) => {
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

export default userSlice.reducer;
