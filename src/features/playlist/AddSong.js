import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "./playlistSlice";

function AddSong() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("* onSubmit:");
    console.log("- State: ", state);
    console.log("- Title: ", state.title);
    console.log("- Artist: ", state.artist);
    console.log("- Title value: ", state.title.value);
    console.log("- Artist value: ", state.artist.value);
    dispatch(
      addSong({
        title: state.title,
        artist: state.artist,
      })
    );
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        placeholder="Title"
        type="text"
        value={state.title.value}
        onChange={handleChange}
      />
      <input
        name="artist"
        placeholder="Artist"
        type="text"
        value={state.artist.value}
        onChange={handleChange}
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
