import axios from "axios";
export async function getCountry() {
  const URL = "https://crio-location-selector.onrender.com/countries";
  const res = await axios.get(URL);
  const data = await res.data;
  console.log(data);
  return data;
}
export async function getStates(country) {
  const URL = `https://crio-location-selector.onrender.com/country=${country}/states`;
  const res = await axios.get(URL);
  const data = await res.data;
  console.log(data);
  return data;
}
export async function getCities(country, state) {
  const URL = `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`;
  const res = await axios.get(URL);
  const data = await res.data;
  console.log(data);
  return data;
}
