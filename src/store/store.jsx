import { configureStore } from "@reduxjs/toolkit"
import playerReducer from "../reducer/playerSlice"

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
})
