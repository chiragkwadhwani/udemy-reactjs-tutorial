import { useState } from 'react'
import React from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <ProfileCard />
      </div>
    </>
  )
}

function ProfileCard() {
  return (
    <>
      <Avatar reactLogo="/src/assets/pic.jpg"/>
      {/* <Avatar reactLogo="bank_payment_receipt.jpg"/> */}
      <div className='data'>
        <Details />
        <SkillsList />
      </div>
    </>
  )
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar"src={props.reactLogo} alt="React Logo" />
    </div>
  )
}

function Details() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  )
}

function SkillsList() {
  return (
    <div className="skill-list">
        <Skill skillname="React" color="blue"/>
        <Skill skillname="Django" color="orange"/>
        <Skill skillname="Python" color="yellow"/>
        <Skill skillname="Node.js" color="red"/>
        <Skill skillname="Golang" color="grey"/>
        <Skill skillname="Javascript" color="purple"/>
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      <span>{props.skillname}</span>
    </div>
  );
}

export default App;
