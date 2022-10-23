import { useSelector } from "react-redux";
import { getAllPhotos } from "../../redux/photos/photoSlice";
import { PhotoProps } from "../PhotoCard/Photo.types";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoListing.scss";

function PhotoListing() {
  const photosArray = useSelector(getAllPhotos);
  console.log(photosArray);

  return (
    <div className="photosWrapper">
      {photosArray.photos &&
        photosArray.photos.map((photo: PhotoProps) => {
          return <PhotoCard key={photo.id} {...photo} />;
        })}
    </div>
  );
}

export default PhotoListing;
