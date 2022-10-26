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
    <div>
      <div className="photosWrapper">
        {photosArray.photos &&
          photosArray.photos.map((photo: PhotoProps) => {
            return <PhotoCard key={photo.id} {...photo} />;
          })}
      </div>
      <div className="flex-btn">
        <button onClick={handlePrevious} className="page-btn">
          Previous
        </button>
        <button onClick={handleNext} className="page-btn">
          Next
        </button>
      </div>
    </div>
  );
}

export default PhotoListing;
