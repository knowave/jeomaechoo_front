import axios from "axios";
import { Menu } from "../interfaces/menu.interface";
import { mockMenus } from "../mock/menu.mock";
import { SERVER_URL } from "../env";

export const fetchMenus = async (
  setMenus: React.Dispatch<React.SetStateAction<Menu[]>>
) => {
  try {
    const response = await axios.get(`${SERVER_URL}/menu`);
    const fetchedMenus: Menu[] = response.data;

    if (fetchedMenus.length === 0) {
      setMenus(mockMenus);
    } else if (fetchedMenus.length < 10) {
      const combinedMenus: Menu[] = [
        ...mockMenus.slice(0, 10 - fetchedMenus.length),
        ...fetchedMenus,
      ];
      setMenus(combinedMenus);
    } else {
      setMenus(fetchedMenus);
    }
  } catch (error) {
    console.error("메뉴를 불러오는 중 오류가 발생했습니다:", error);
    setMenus(mockMenus);
  }
};
