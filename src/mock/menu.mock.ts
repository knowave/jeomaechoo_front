import { Menu } from "../interfaces/menu.interface";
import { v4 as uuid } from "uuid";

export const mockMenus: Menu[] = [
  {
    id: uuid(),
    name: "Pizza",
    image:
      "https://cdn.pixabay.com/photo/2019/08/15/09/03/pizza-4407510_1280.jpg",
  },
  {
    id: uuid(),
    name: "Burger",
    image:
      "https://media.istockphoto.com/id/1473452859/ko/%EC%82%AC%EC%A7%84/%EB%A7%9B%EC%9E%88%EB%8A%94-%EC%B9%98%EC%A6%88-%EB%B2%84%EA%B1%B0-%EC%BD%9C%EB%9D%BC-%ED%95%9C-%EC%9E%94-%EA%B0%90%EC%9E%90-%ED%8A%80%EA%B9%80%EC%9D%B4-%EB%82%98%EB%AC%B4-%EC%9F%81%EB%B0%98%EC%97%90-%ED%81%B4%EB%A1%9C%EC%A6%88%EC%97%85%EB%90%A9%EB%8B%88%EB%8B%A4.jpg?s=2048x2048&w=is&k=20&c=1OnuIWFHLhoaoNdFimBXCrmWM8D-_ysXbsZtjKYvmIM=",
  },
  {
    id: uuid(),
    name: "Sushi",
    image:
      "https://media.istockphoto.com/id/1053854126/ko/%EC%82%AC%EC%A7%84/%EB%A8%B9%EC%9D%84-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%8A%A4%EC%8B%9C.jpg?s=2048x2048&w=is&k=20&c=qQWhT27Tws8g6j8BDoGZMIzsPDtsGSesfkGjrTGTJK0=",
  },
  {
    id: uuid(),
    name: "Pasta",
    image:
      "https://cdn.pixabay.com/photo/2019/11/19/05/07/oyster-4636451_1280.jpg",
  },
  {
    id: uuid(),
    name: "Salad",
    image:
      "https://media.istockphoto.com/id/1454741285/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B5%AC%EC%9A%B4-%EC%83%9D%EC%84%A0%EA%B3%BC-%EC%95%BC%EC%B1%84-%EC%83%90%EB%9F%AC%EB%93%9C.jpg?s=2048x2048&w=is&k=20&c=HCA_HAqnpc2CuUPq63TMZ_V61Y6LNKDtou4UhN-qwVs=",
  },
  {
    id: uuid(),
    name: "Ice Cream",
    image:
      "https://media.istockphoto.com/id/1161805849/ko/%EC%82%AC%EC%A7%84/%EB%94%B8%EA%B8%B0-%EB%B0%94%EB%8B%90%EB%9D%BC-%EB%8C%80%EB%A6%AC%EC%84%9D-%EB%8F%8C-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%99%80%ED%94%8C-%EC%BD%98-%EC%B4%88%EC%BD%9C%EB%A6%BF-%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC.jpg?s=2048x2048&w=is&k=20&c=SCFA5pIi1rCHJSQN0LnyghPzzF7mfg0LoavIig8h9Ug=",
  },
  {
    id: uuid(),
    name: "Steak",
    image:
      "https://media.istockphoto.com/id/540233806/ko/%EC%82%AC%EC%A7%84/%EA%B5%AC%EC%9A%B4-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC.jpg?s=2048x2048&w=is&k=20&c=ljvTQ6F87QeTmjH4yIEAcY_YUWG2JM_F9YbR9kNo80c=",
  },
  {
    id: uuid(),
    name: "Tacos",
    image:
      "https://media.istockphoto.com/id/614313140/ko/%EC%82%AC%EC%A7%84/%EA%B0%90%EC%9E%90-%ED%8A%80%EA%B9%80%EC%9D%84-%EA%B3%81%EB%93%A4%EC%9D%B8-%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EC%87%A0%EA%B3%A0%EA%B8%B0-%ED%83%80%EC%BD%94.jpg?s=2048x2048&w=is&k=20&c=8ykHH0-Hwi0-mIo3MjU_Ap35Kv94FlFFvXzVJnemj74=",
  },
  {
    id: uuid(),
    name: "Ramen",
    image:
      "https://media.istockphoto.com/id/1406672650/ko/%EC%82%AC%EC%A7%84/%EC%9D%BC%EB%B3%B8-%ED%86%A4%EC%BD%94%EC%B8%A0-%EB%9D%BC%EB%A9%B4.jpg?s=2048x2048&w=is&k=20&c=AR2XqLkmkMnDd2ESHWH2sq0WAcRsFb7wmlNzsDbI4RE=",
  },
  {
    id: uuid(),
    name: "Sandwich",
    image:
      "https://media.istockphoto.com/id/157431311/ko/%EC%82%AC%EC%A7%84/%ED%84%B0%ED%82%A4-%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98.jpg?s=2048x2048&w=is&k=20&c=glIIiyG6DfM4RrXCsJufIrP83T1S4K8AaOiNquXkIcE=",
  },
];
