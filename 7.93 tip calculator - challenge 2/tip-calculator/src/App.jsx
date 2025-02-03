import { useState } from "react";

export default function App() {
  return (
    <div><TipCalculator /></div>
  )
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  
  const tip = billAmount * ((rating1 + rating2) / 2 / 100);

  function handleReset() {
    setBillAmount("");
    setRating1(0);
    setRating2(0);
  }

  return (
    <div>
      <TotalInput bill={billAmount} onSetBill={setBillAmount} />
      <RatingInput percentage={rating1} onSelect={setRating1} >How did you like the service?</RatingInput>
      <RatingInput percentage={rating2} onSelect={setRating2} >How did your friend like the service?</RatingInput>

      {billAmount > 0 && (
        <>
          <ResultOutput bill={billAmount} tip={tip}/>
          <ResetButton onReset={handleReset}/>
        </>
      )}
    </div>
  )
}

function TotalInput({bill, onSetBill}){
  return (
    <div>
    <label>How much was the bill?</label>
    <input type="text" id="total" value={bill} placeholder="Total Amount" onChange={(e) => onSetBill(Number(e.target.value))} />
    </div>
  )
}

function RatingInput({children, percentage, onSelect}) {
  return (
    <div>
    <label>{children}</label>
    <select id="rating" value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
    </div>
  )
}

function ResultOutput({bill, tip}) {
  return (
    <b><h3>You Pay ${bill + tip} (${bill} + ${tip} tip)</h3></b>
  )
}

function ResetButton({onReset}) {
  return (
    <button onClick={onReset}>Reset</button>
  )
}