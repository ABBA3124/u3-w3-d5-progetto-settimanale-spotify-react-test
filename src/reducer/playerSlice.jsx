import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: null,
    likedSongs: {}, //contenitore mi piace
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    },
    toggleLikeSong: (state, action) => {
      const songId = action.payload
      state.likedSongs[songId] = !state.likedSongs[songId]
    },
  },
})

export const { setCurrentSong, toggleLikeSong } = playerSlice.actions

export default playerSlice.reducer
