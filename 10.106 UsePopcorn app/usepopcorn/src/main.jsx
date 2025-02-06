import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import StarRating from './StarRating.jsx'
import { useState } from 'react';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating}/>
      <h1>This movie was rated {movieRating}</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5}/>
    <StarRating maxRating={10}/>
    <StarRating />
    <StarRating size={24} color="red" messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={3}/>
    <Test />
  </StrictMode>,
)
