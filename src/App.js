import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [videoIDs, setVideoIDs] = useState([]);

  const searchVideos = async () => {
    const response = await fetch(`http://localhost:8080/search?q=${query}`);
    const data = await response.json();
    setVideoIDs(data);
  };

  return (
    <div className="App">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube"
      />
      <button onClick={searchVideos}>Search</button>

      <ul>
        {videoIDs.map((id) => (
          <li key={id}>
            <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
