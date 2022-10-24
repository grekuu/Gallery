import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAsyncPhotoDetail,
  getSelectedPhoto,
  removeSelectedPhoto,
} from "../../redux/photos/photoSlice";
import { AppDispatch } from "../../redux/store";
import "./PhotoDetail.scss";

function PhotoDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getSelectedPhoto);
  console.log(data);

  let renderPhoto;

  renderPhoto = data.src ? (
    <div className="movie-detail-container">
      <img src={data.src.large} alt={data.alt} />
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
      {renderPhoto}
    </div>
  );
}

export default PhotoDetail;
