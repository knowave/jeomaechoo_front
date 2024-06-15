import axios from "axios";
import { Menu } from "../interfaces/menu.interface";

export const addMenu = async (menu: Menu, imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append("name", menu.name);
    formData.append("image", imageFile);

    const response = await axios.post("http://localhost:8080/menu", formData, {
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
