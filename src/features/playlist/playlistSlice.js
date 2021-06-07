import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
    rating: 5,
  },
  {
    id: 1,
    title: "Dancing Queen",
    artist: "Abba",
    genre: "Pop",
    rating: 1,
  },
];

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSong: (state) => {
      console.log("addSong");
      console.log(state);
    },
    removeSong: (state, action) => {
      console.log("RemoveSong");
      return state.filter((song) => song.id !== action.payload.id);
    },
  },
});

export const songsList = (state) => state.playlist;

export const { addSong, removeSong } = playlistSlice.actions;

export default playlistSlice.reducer;
