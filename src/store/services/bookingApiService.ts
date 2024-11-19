import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

const fetchBooking = async (id: number | string) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(`${baseURL}/users/${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { fetchBooking };
