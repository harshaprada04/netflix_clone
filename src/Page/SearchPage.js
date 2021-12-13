import "./search.css";
import { useState } from "react";

import SearchEngine from "./Search";

function SearchPage() {
  const [input, setInput] = useState();

  return (
    <div>
      <input
        className="search_style"
        type="text"
        placeholder="movie name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <SearchEngine input={input} />
    </div>
  );
}

export default SearchPage;
