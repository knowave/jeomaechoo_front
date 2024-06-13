import axios from "axios";
import { Menu } from "../interfaces/menu.interface";
import { mockMenus } from "../mock/menu.mock";

export const fetchMenus = async (
  setMenus: React.Dispatch<React.SetStateAction<Menu[]>>
) => {
  try {
    const response = await axios.get("http://localhost:8080/menu");
    const fetchedMenus: Menu[] = response.data;

    if (fetchedMenus.length === 0) {
      setMenus(mockMenus);
    } else {
      setMenus(fetchedMenus);
    }
  } catch (error) {
    console.error("Error fetching menus:", error);
    setMenus(mockMenus);
  }
};
