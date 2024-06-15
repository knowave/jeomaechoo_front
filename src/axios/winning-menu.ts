import axios from "axios";
import { SERVER_URL } from "../env";

export const sendWinningMenu = async (id: string) => {
  try {
    await axios.post(`${SERVER_URL}/${id}`);
  } catch (error) {
    console.error("Error sending winner data:", error);
  }
};
