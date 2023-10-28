// App.js
import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    fetch(`http://localhost:8080/search?q=${query}`)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
      })
      .catch(error => {
        console.error("Error fetching search results:", error);
      });
  }

  return (
    <div className="App">
      <input 
        type="text" 
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {results.map((item, index) => (
          <div key={index}>
              <h3>
                  <a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noopener noreferrer">
                      {item.title}
                  </a>
              </h3>
              <img src={item.thumbnail} alt={item.title} />
          </div>
      ))}
    </div>
  );
}

export default App;
