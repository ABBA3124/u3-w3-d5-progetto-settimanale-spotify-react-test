import React, { useEffect, useState } from "react"

const MusicSection = ({ artistName, sectionId }) => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
        if (response.ok) {
          const { data } = await response.json()
          setSongs(data.slice(0, 8))
        } else {
          throw new Error("Failed to fetch songs")
        }
      } catch (error) {
        console.error("Error fetching songs:", error)
      }
    }

    fetchSongs()
  }, [artistName])

  return (
    <div id={sectionId} className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {songs.map((song) => (
        <div key={song.id} className="col text-center">
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
