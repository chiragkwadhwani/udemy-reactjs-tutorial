import { useState } from 'react'
import React from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

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
      {skills.map((skill) => (
        <Skill skillname={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  )
}

function Skill({skillname, level, color}) {
  const emoji = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪"
  };

  return (
    <div className="skill" style={{backgroundColor:color}}>
      <span>{skillname}</span>
      <span>{emoji[level]}</span>
      {/* <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span> */}
    </div>
  );
}

export default App;
