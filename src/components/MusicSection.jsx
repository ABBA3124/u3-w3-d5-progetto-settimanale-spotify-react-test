import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setCurrentSong } from "../reducer/playerSlice"

const MusicSection = ({ artistName, sectionId }) => {
  const [songs, setSongs] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
        if (response.ok) {
          const { data } = await response.json()
          setSongs(data.slice(0, 4))
        } else {
          throw new Error("fetch ricerca song fallita")
        }
      } catch (error) {
        console.error("errore nella fetch song:", error)
      }
    }

    fetchSongs()
  }, [artistName])

  return (
    <div id={sectionId} className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {songs.map((song) => (
        <div key={song.id} className="col text-center" onClick={() => dispatch(setCurrentSong(song))}>
          <img className="img-fluid" src={song.album.cover_medium} alt="track" />
          <p>
            Track: "{song.title}"<br />
            Artist: {song.artist.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default MusicSection
