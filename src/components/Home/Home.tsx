import PhotoListing from "../PhotoListing/PhotoListing";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncPhotos } from "../../redux/photos/photoSlice";
import { AppDispatch } from "../../redux/store";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAsyncPhotos());
  }, [dispatch]);

  return (
    <div>
      <PhotoListing></PhotoListing>
    </div>
  );
}

export default Home;
