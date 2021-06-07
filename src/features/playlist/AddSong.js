import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "./playlistSlice";

function AddSong() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const onSubmit = (event) => {
    // de dispatch wordt getriggerd, maar er wordt niks meegezonden.
    // artist en title lijken niet te werken.
    // wel invoer mogelijk van artist, niet van title.
    // nog niks gedaan met genre en rating.
    event.preventDefault();
    console.log("* onSubmit:");
    console.log("Title: ", title);
    console.log("Title: ", artist);
    dispatch(
      addSong({
        title: title,
        artist: artist,
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Title"
        type="text"
        value={title}
        // onderstaande werkt (nog) niet.
        onChange={(event) => setTitle(event.target.title)}
      />
      <input
        placeholder="Artist"
        type="text"
        value={artist}
        // onderstaande werkt (nog) niet.
        onChange={(event) => setArtist(event.target.artist)}
      />
      <select id="genre" name="genre">
        <option value=""></option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="pop">Pop</option>
      </select>
      <select id="rating" name="rating">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSong;
