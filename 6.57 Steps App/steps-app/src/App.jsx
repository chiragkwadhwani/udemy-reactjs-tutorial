import { useState } from "react";
import "./index.css";

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function counter() {

}

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const [jumpvalue, setJumpValue] = useState(1);
  const [countvalue, setCountValue] = useState(1);
  let date = new Date("january 31 2025");
  date.setDate(date.getDate() + countvalue);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
  }

  function handleReset() {
    setCountValue(0);
    setJumpValue(1);
  }


  return (
    <div>
    <div>
      <button className="close" onClick={()=>setIsOpen((is) => !is)}>&times;</button>
       {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">Step {step}: {messages[step - 1]}</p> */}
          <StepMessage step={step}>{messages[step - 1]}

          <div class="buttons">
            <Button textColor="#333" bgColor="#e7e7e7" onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>Learn How</Button>
          </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}><span>👈</span> Previous</Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>Next <span>👉</span></Button>
            {/* <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handlePrevious}>Previous</button> */}
            {/* <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>Next</button> */}
          </div>
        </div>
      )}
    </div>
    <div>
      <h1>STEPS COUNTER</h1>
      
      <div>
        <input type="range" min="0" max="10" value={jumpvalue} onChange={(e) => setJumpValue(Number(e.target.value))} />
        {/* <button onClick={() => setJumpValue((s) => s - 1)}>-</button> */}
        <span>Step: {jumpvalue}</span>
        {/* <button onClick={() => setJumpValue((s) => s + 1)}>+</button> */}
      </div>
      
      <div>
        <button onClick={() => setCountValue((c) => c - jumpvalue)}>-</button>
        {/* <span>Count: {countvalue}</span> */}
        <input type="text" value={countvalue} onChange={(e) => setCountValue(Number(e.target.value))} />
        <button onClick={() => setCountValue((c) => c + jumpvalue)}>+</button>
      </div>

      <br />

      <div>
        <span>{countvalue === 0 
          ? "Today is " 
          : countvalue > 0
          ? `${countvalue} days from today is `
          : `${Math.abs(countvalue)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>

      {(countvalue !== 0 || jumpvalue !== 1) ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div> 
        ) : null
      }
    </div>
    </div>
  );
}

function StepMessage({step, children}) {
  return <div className="message"><h3>Step {step}</h3>{children}</div>
}

function Button({textColor, bgColor, onClick, children}) {
  return <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>
    {children}
  </button>;
}