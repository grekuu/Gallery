import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoApi from "../../common/api/photoApi";

export const fetchAsyncPhotos = createAsyncThunk(
  "photos/fetchAsyncPhotos",
  async (fullQuery: string) => {
    const response = await photoApi.get(`${fullQuery}`);
    return response.data;
  }
);

// export const fetchAsyncPhotos = createAsyncThunk(
//   "photos/fetchAsyncPhotos",
//   async (query: string) => {
//     const response = await photoApi.get(`/search?query=${query}`);
//     return response.data;
//   }
// );

export const fetchAsyncPhotoDetail = createAsyncThunk(
  "photos/fetchAsyncPhotoDetail",
  async (id: string) => {
    const response = await photoApi.get(`/photos/${id}`);
    return response.data;
  }
);

const initialState = {
  photos: {},
  selectedPhoto: {},
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    removeSelectedPhoto: (state) => {
      state.selectedPhoto = {};
    },
  },
  extraReducers: (builder) => {
    //photos
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
    //photo detail
    builder.addCase(fetchAsyncPhotoDetail.fulfilled, (state, { payload }) => {
      console.log("Fetched successfully");
      state.selectedPhoto = payload;
    });
  },
});

export const { removeSelectedPhoto } = photoSlice.actions;
export const getAllPhotos = (state: any) => state.photos.photos;
export const getSelectedPhoto = (state: any) => state.photos.selectedPhoto;
export default photoSlice.reducer;
