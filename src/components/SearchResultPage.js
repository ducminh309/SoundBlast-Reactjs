import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResultPage = () => {
  const [results, setResults] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search).get("query");
    if (query) {
      axios
        .get(`http://localhost:8000/api/songs/search?query=${query}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.error("Search error:", err));
    }
  }, [search]);

  return (
    <div className="container mt-4">
      <h3>Search Results</h3>
      <ul>
        {results.map((song) => (
          <li key={song.id}>{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultPage;
