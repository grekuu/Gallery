import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncPhotos, getAllPhotos } from "../../redux/photos/photoSlice";
import { AppDispatch } from "../../redux/store";
import { PhotoProps } from "../PhotoCard/Photo.types";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoListing.scss";

function PhotoListing() {
  const photosArray = useSelector(getAllPhotos);
  console.log(photosArray);
  const dispatch = useDispatch<AppDispatch>();

  function handlePrevious() {
    const previousPage = photosArray.prev_page;
    dispatch(fetchAsyncPhotos(previousPage));
  }

  function handleNext() {
    const nextPage = photosArray.next_page;
    dispatch(fetchAsyncPhotos(nextPage));
  }

  return (
    <div className="photosWrapper">
      {photosArray.photos &&
        photosArray.photos.map((photo: PhotoProps) => {
          return <PhotoCard key={photo.id} {...photo} />;
        })}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PhotoListing;
