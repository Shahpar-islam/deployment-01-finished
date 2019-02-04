import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-shahpar.firebaseio.com/"
});

export default instance;
