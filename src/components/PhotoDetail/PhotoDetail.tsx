import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAsyncPhotoDetail,
  getSelectedPhoto,
  removeSelectedPhoto,
} from "../../redux/photos/photoSlice";
import { AppDispatch } from "../../redux/store";
import "./PhotoDetail.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

function PhotoDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getSelectedPhoto);

  let renderPhoto;

  renderPhoto = data.src ? (
    <div className="movie-detail-container">
      <img src={data.src.large} alt={data.alt} loading="lazy" />
      <a href={data.photographer_url} rel="noreferrer" target="_blank">
        {data.photographer}{" "}
      </a>
    </div>
  ) : (
    <div className="movies-error">
      <h3>Loading</h3>
    </div>
  );

  useEffect(() => {
    dispatch(fetchAsyncPhotoDetail(id!));
    return () => {
      dispatch(removeSelectedPhoto());
    };
  }, [dispatch, id]);

  return (
    <div
      className="movie-detail-container"
      style={{ backgroundColor: data.avg_color }}
    >
      <Link to={`/`} style={{ position: "absolute", top: "0", left: "0" }}>
        <AiOutlineArrowLeft className="arrow-left-icon" />
      </Link>
      {renderPhoto}
    </div>
  );
}

export default PhotoDetail;
