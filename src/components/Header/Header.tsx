import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchAsyncPhotos } from "../../redux/photos/photoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const [query, setQuery] = useState<string>("dog");

  function handleSearch() {
    dispatch(fetchAsyncPhotos(query));
  }

  return (
    <div className="header">
      <input
        type="text"
        className="search-input"
        placeholder="Search for photos"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <AiOutlineSearch />
      </button>
    </div>
  );
}

export default Header;
