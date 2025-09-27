import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5155e8a8497b4d5f9201f89f1fbcb40b",
  },
});
