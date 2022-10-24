import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoApi from "../../common/api/photoApi";
import photoIdApi from "../../common/api/photoIdApi";
import { PhotoProps } from "../../components/PhotoCard/Photo.types";

export const fetchAsyncPhotos = createAsyncThunk<PhotoProps>(
  "photos/fetchAsyncPhotos",
  async () => {
    const query = "dog";
    const response = await photoApi.get(`?query=${query}`);
    return response.data;
  }
);

export const fetchAsyncPhotoDetail = createAsyncThunk(
  "photos/fetchAsyncPhotoDetail",
  async (id: string) => {
    const response = await photoIdApi.get(`${id}`);
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
