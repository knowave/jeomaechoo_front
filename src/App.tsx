// App.tsx
import React, { useEffect, useState } from "react";
import {
  AppContainer,
  Header,
  MenuCard,
  MenuContainer,
  SpinButton,
  Title,
  Winner,
  ModalContent,
  Form,
  GlobalStyle,
} from "./App.css";
import { Menu } from "./interfaces/menu.interface";
import { fetchMenus } from "./axios/menu";
import { Modal } from "@mui/material";
import { addMenu } from "./axios/add-menu";

const App: React.FC<{}> = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [winner, setWinningMenu] = useState<Menu | null>(null);
  const [spinning, setSpinning] = useState(true);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchMenus(setMenus);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (spinning) {
      interval = setInterval(() => {
        setCurrentMenuIndex((prevIndex) => (prevIndex + 1) % menus.length);
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [spinning, menus.length]);

  const stopSpinning = () => {
    setSpinning(false);
    const selectedMenu = menus[currentMenuIndex];
    setWinningMenu(selectedMenu);
  };

  const handleRetry = () => {
    if (retryCount >= 2) {
      setShowModal(true);
    } else {
      setRetryCount(retryCount + 1);
      setSpinning(true);
      setWinningMenu(null);
    }
  };

  const handleAddMenu = () => {
    setShowModal(false);
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newMenu: Menu = {
      name: formData.get("name") as string,
      image: URL.createObjectURL(formData.get("image") as File),
    };

    const imageFile = formData.get("image") as File;

    try {
      await addMenu(newMenu, imageFile);
      setMenus((prevMenus) => [...prevMenus, newMenu]);
      setShowForm(false);
      setRetryCount(0);
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>Jeomaechoo</Title>
          <MenuContainer>
            {menus.length > 0 && (
              <MenuCard key={menus[currentMenuIndex].id} active={true}>
                <img
                  src={menus[currentMenuIndex].image}
                  alt={menus[currentMenuIndex].name}
                />
                <span>{menus[currentMenuIndex].name}</span>
              </MenuCard>
            )}
          </MenuContainer>
          <SpinButton
            onClick={spinning ? stopSpinning : handleRetry}
            disabled={showModal}
          >
            {spinning ? "저메추 클릭" : "다시하기"}
          </SpinButton>
          {winner && (
            <Winner>
              <h2>오늘의 저녁 메뉴가 나왔습니다!</h2>
              <p>{`당첨 메뉴: ${winner.name}`}</p>
            </Winner>
          )}
        </Header>

        <Modal open={showModal} onClose={handleCloseModal}>
          <ModalContent>
            <h2>메뉴를 같이 추가해봐요</h2>
            <button onClick={handleAddMenu}>추가하러가기</button>
            <button onClick={handleCloseModal}>다음에 하기</button>
          </ModalContent>
        </Modal>
      </AppContainer>

      {showForm && (
        <Form onSubmit={handleFormSubmit}>
          <h2>메뉴 추가</h2>
          <input type="text" name="name" placeholder="메뉴 이름" required />
          <input type="file" name="image" accept="image/*" required />
          <button type="submit">추가</button>
        </Form>
      )}
    </>
  );
};

export default App;
