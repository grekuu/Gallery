import { PhotoProps } from "./Photo.types";
import { Link } from "react-router-dom";
import "./PhotoCard.scss";

function PhotoCard({ alt, src, id }: PhotoProps) {
  return (
    <div className="photo-card">
      <Link to={`/${id}`}>
        <img src={src.medium} alt={alt} className="photo-image" />
      </Link>
    </div>
  );
}

export default PhotoCard;
