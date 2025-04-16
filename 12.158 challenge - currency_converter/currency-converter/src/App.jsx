import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1)
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('IDR')
  const [exchangeRate, setExchangeRate] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(function() {
    console.log(`Converting ${amount} ${currencyFrom} to ${currencyTo}`);
    async function convert() {
      setLoading(true);
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currencyFrom}&to=${currencyTo}`);
      const data = await res.json();
      console.log(data.rates[currencyTo]);
      setExchangeRate(data.rates[currencyTo]);
      setLoading(false);
    }

    if (currencyFrom === currencyTo) {
      return setExchangeRate(amount);
    }
    convert();
  }, [amount, currencyFrom, currencyTo]);

  return (
    <>
    <h1>Currency Converter</h1>
    <div>
      <input type="text" value={amount} onChange={e=>setAmount(Number(e.target.value))} disabled={loading} />
      <select value={currencyFrom} onChange={e=>setCurrencyFrom(e.target.value)} disabled={loading} >
          <option value="IDR">IDR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="SEK">SEK</option>
          <option value="NZD">NZD</option>
          <option value="MXN">MXN</option>
          <option value="SGD">SGD</option>
          <option value="HKD">HKD</option>
          <option value="NOK">NOK</option>
          <option value="KRW">KRW</option>
          <option value="TRY">TRY</option>
          <option value="RUB">RUB</option>
          <option value="INR">INR</option>
      </select>
      <select value={currencyTo} onChange={e=>setCurrencyTo(e.target.value)} disabled={loading} >
          <option value="IDR">IDR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="SEK">SEK</option>
          <option value="NZD">NZD</option>
          <option value="MXN">MXN</option>
          <option value="SGD">SGD</option>
          <option value="HKD">HKD</option>
          <option value="NOK">NOK</option>
          <option value="KRW">KRW</option>
          <option value="TRY">TRY</option>
          <option value="RUB">RUB</option>
          <option value="INR">INR</option>
      </select>
      <p>{currencyTo} {exchangeRate}</p>
    </div>
    </>
  )
}

export default App
