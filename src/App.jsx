import { useState, useHook } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [person, setPerson] = useState({
    fullName: "Raji Olatunde",
    bio: "A Tech enthusiast & Future Prospect",
    imgSrc: "https://shorturl.at/dJNPR",
    profession: "Agba Tech",
  })
const [shows, setShows] = useState(true)

  return (
    <>
      <div>
      {shows ? (
        <div>
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt={person.fullName} />
          <p>Profession: {person.profession}</p>
        </div>
      ) : (
        <p>Person is hidden.</p>
      )}

      <button onClick={() => setShows(!shows)}>
        Toggle Person
      </button>
    </div>
    </>
  )
}

export default App
