import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: null,
    likedSongs: {}, //contenitore mi piace
    searchResults: {},
    playlists: {
      preferite: [],
      allenamento: [],
    },
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
      state.searchResults = action.payload // Aggiorna il risultati di ricerca
    },
    addToPlaylist: (state, action) => {
      const { playlistName, songId } = action.payload
      if (!state.playlists[playlistName]) {
        state.playlists[playlistName] = [] // crea una playlist se non esiste una
      }
      if (!state.playlists[playlistName].includes(songId)) {
        state.playlists[playlistName].push(songId) // aggiunge canzoni alla palylist
      }
    },
  },
})

export const { setCurrentSong, toggleLikeSong, setSearchResults, addToPlaylist } = playerSlice.actions

export default playerSlice.reducer
