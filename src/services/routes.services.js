import axios from "axios";

const API = process.env.REACT_APP_URL_URI;

const getAllRoutes = async () => {
  const {data} = await axios.get(`${API}/routes`)
  return data
}

export { getAllRoutes }