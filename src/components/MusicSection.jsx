import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentSong, toggleLikeSong, setSearchResults } from "../reducer/playerSlice"

const MusicSection = ({ artistName, sectionId }) => {
  const [songs, setSongs] = useState([])
  const dispatch = useDispatch()
  const likedSongs = useSelector((state) => state.player.likedSongs)
  const searchResults = useSelector((state) => state.player.searchResults)

  console.log("mi piace alle canzoni:", likedSongs)
  console.log("risultati della ricerca:", searchResults)

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
        if (response.ok) {
          const { data } = await response.json()
          dispatch(setSearchResults({ [artistName]: data })) //risultati che verranno salvati nel redux store
          console.log(data)
          setSongs(data.slice(0, 4))
        } else {
          throw new Error("errore caricamento fetch song")
        }
      } catch (error) {
        console.error("errore nella fetch:", error)
      }
    }

    fetchSongs()
  }, [artistName, dispatch])

  return (
    <div id={sectionId} className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {songs.map((song) => (
        <div key={song.id} className="col text-center" onClick={() => dispatch(setCurrentSong(song))}>
          <img className="img-fluid" src={song.album.cover_medium} alt="track" />
          <p>
            Track: "{song.title}"<br />
            Artist: {song.artist.name}
          </p>
          <button
            className={`btn ${likedSongs[song.id] ? "btn-success" : "btn-outline-secondary"}`}
            onClick={() => dispatch(toggleLikeSong(song.id))}
          >
            {likedSongs[song.id] ? "🤍" : "❤️"}
          </button>
        </div>
      ))}
    </div>
  )
}

export default MusicSection
