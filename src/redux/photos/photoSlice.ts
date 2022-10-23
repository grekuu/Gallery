import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import photoApi from "../../common/api/photoApi";

export const fetchAsyncPhotos = createAsyncThunk<any>(
  "photos/fetchAsyncPhotos",
  async () => {
    const query = "dog";
    const response = await photoApi.get(`?query=${query}`);
    return response.data;
  }
);

const initialState = {
  photos: {},
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhotos: (state, action: PayloadAction<string[]>) => {
      state.photos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncPhotos.pending, () => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncPhotos.fulfilled, (state, { payload }) => {
      console.log("Fetched successfully");
      state.photos = payload;
    });
    builder.addCase(fetchAsyncPhotos.rejected, () => {
      console.log("Rejected");
    });
  },
});

export const { addPhotos } = photoSlice.actions;
export const getAllPhotos = (state: any) => state.photos.photos;
export default photoSlice.reducer;
