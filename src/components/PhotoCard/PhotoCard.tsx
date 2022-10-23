import { PhotoProps } from "./Photo.types";
import "./PhotoCard.scss";

function PhotoCard({ alt, src }: PhotoProps) {
  return (
    <div className="photo-card">
      <img src={src.medium} alt={alt} className="photo-image" />
    </div>
  );
}

export default PhotoCard;
