import axios from "axios";

export const sendWinningMenu = async (id: string) => {
  try {
    await axios.post(`http://localhost:8080/${id}`);
  } catch (error) {
    console.error("Error sending winner data:", error);
  }
};
