import { useState, useEffect, useRef } from "react";
import { getCountry, getStates, getCities } from "./api/api";
import './App.css'
function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleCountry = async (e) => {
    setCountry(e.target.value);
  };
  const handleState = async (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const data = await getCountry();
      setCountries(data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const data = await getStates(country);
      setStates(data);
    })();
  }, [country]);
  useEffect(() => {
    (async () => {
      const data = await getStates(country,state);
      setCities(data);
    })();
  }, [country, state]);
  return (
    <div className="app">
      <div className="heading">Select Location</div>
      <select name="" id="" onChange={handleCountry} className="select">
        <option>Select Country</option>
        {countries.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select name="" id="" onChange={handleState} className="select">
        <option>Select State</option>
        {states.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select name="" id="" className="select">
        <option>Select City</option>
        {cities.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
