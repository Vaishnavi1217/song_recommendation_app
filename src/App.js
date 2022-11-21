import React, { useState } from "react";
import "./styles.css";
const songDetails = {
  Romantic: [
    { name: "Bade acche lagte hai", Rating: "5/5" },
    { name: "Suhana safar", Rating: "4.5/5" }
  ],
  Sad: [
    { name: "Bewafaa", Rating: "3/5" },
    { name: "Channa Mereya", Rating: "4/5" }
  ],
  Friendship: [
    { name: "Tera Yaar hoon main", Rating: "5/5" },
    { name: "Tere Jaisa Yaar Kahan", Rating: "4.5/5" }
  ]
};

export default function App() {
  const [details, setDetails] = useState("Sad");

  function clickHandler(song) {
    setDetails(song);
  }
  return (
    <div className="App">
      <h1>Songs</h1>
      <h4>Checkout my favorite songs.Select a genre to get started!</h4>
      <div>
        {Object.keys(songDetails).map((song) => (
          <button
            onClick={() => {
              clickHandler(song);
            }}
          >
            {song}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {songDetails[details].map((song) => (
            <li key={song}>
              <div className="hello">
                <b>*</b> {song.name}{" "}
              </div>
              <div className="hello">{song.Rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
