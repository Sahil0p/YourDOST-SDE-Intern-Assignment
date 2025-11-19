import axios from "axios";

const API_URL = "https://reqres.in/api/users";

export const fetchUsers = async (page = 1)=>{
  try {
    const response = await axios.get(`${API_URL}?page=${page}`, {
      headers: {
        Accept: "application/json",
        "x-api-key": "reqres-free-v1"  // Add the ReqRes API key header here
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.warn("Rate limited. Retrying in 3 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const retryResponse = await axios.get(`${API_URL}?page=${page}`, {
        headers: {
          Accept: "application/json",
          "x-api-key": "reqres-free-v1" // Retry also needs the API key header
        },
      });
      return retryResponse.data;
    }
    throw error;
  }
};
