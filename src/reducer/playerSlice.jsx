import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: null,
    likedSongs: {}, //contenitore mi piace
    searchResults: {},
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    },
    toggleLikeSong: (state, action) => {
      const songId = action.payload
      state.likedSongs[songId] = !state.likedSongs[songId]
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload // Aggiorna i risultati di ricerca
    },
  },
})

export const { setCurrentSong, toggleLikeSong, setSearchResults } = playerSlice.actions

export default playerSlice.reducer
