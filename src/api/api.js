import axios from "axios";
export async function getCountry() {
  try {
    const URL = "https://crio-location-selector.onrender.com/countries";
    const res = await axios.get(URL);
    const data = await res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function getStates(country) {
  try {
    const URL = `https://crio-location-selector.onrender.com/country=${country}/states`;
    const res = await axios.get(URL);
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getCities(country, state) {
  try {
    const URL = `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`;
    const res = await axios.get(URL);
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
