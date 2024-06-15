import axios from "axios";
import { Menu } from "../interfaces/menu.interface";
import { SERVER_URL } from "../../env";

export const addMenu = async (menu: Menu, imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append("name", menu.name);
    formData.append("image", imageFile);

    const response = await axios.post(`${SERVER_URL}/menu`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding menu:", error);
    throw error;
  }
};
