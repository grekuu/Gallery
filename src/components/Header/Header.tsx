import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchAsyncPhotos } from "../../redux/photos/photoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useState, useEffect } from "react";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const [query, setQuery] = useState<string>("dog");

  const fullQuery = `/search?page=1&per_page=15&query=${query}`;

  function handleSearch() {
    dispatch(fetchAsyncPhotos(fullQuery));
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      dispatch(fetchAsyncPhotos(fullQuery));
    }
  };

  useEffect(() => {
    dispatch(fetchAsyncPhotos(fullQuery));
    //eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="header">
      <input
        type="text"
        className="search-input"
        placeholder="Search for photos"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={handleSearch}>
        <AiOutlineSearch />
      </button>
    </div>
  );
}

export default Header;
