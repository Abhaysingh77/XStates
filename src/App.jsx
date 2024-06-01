import { useState, useEffect, useRef } from "react";
import { getCountry, getStates, getCities } from "./api/api";
import './App.css'
function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleCountry = async (e) => {
    setCountry(e.target.value);
  };
  const handleState = async (e) => {
    setState(e.target.value);
  };
  const handleCity = async (e) => {
    setCity(e.target.value);
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
      const data = await getCities(country,state);
      setCities(data);
    })();
  }, [state]);
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
      <select name="" id="" className="select" onChange={handleCity}>
        <option>Select City</option>
        {cities.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {
        (city && country && state) && <p>You Selected <b>{city}</b>, {state}, {country}</p>
      }
    </div>
  );
}

export default App;
