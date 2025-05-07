import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
      type="search"
      placeholder="Enter song name"
      className="border-10px; me-2"
      aria-label="Search"
      style={{ width: "320px", height: "38px"}}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit"  className="btn btn-light ms-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
