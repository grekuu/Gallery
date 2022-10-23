import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <input
        type="text"
        className="search-input"
        placeholder="Search for photos"
      />
      <button className="search-button">
        <AiOutlineSearch />
      </button>
    </div>
  );
}

export default Header;
