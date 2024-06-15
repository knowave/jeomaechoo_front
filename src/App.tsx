import React, { useEffect, useState } from "react";
import {
  AppContainer,
  Header,
  MenuCard,
  MenuContainer,
  SpinButton,
  Title,
  Winner,
  StyledModalContent,
  ModalContent,
  Form,
  GlobalStyle,
  WhiteButton,
  BlackButton,
  StyledInput,
  CustomGreenButton,
  ButtonContainer,
  ImagePreview,
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

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
    setShowForm(false);
    setShowSuccessModal(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newMenu: Menu = {
      name: formData.get("name") as string,
      image: URL.createObjectURL(selectedImage as File),
    };

    try {
      await addMenu(newMenu, selectedImage as File);
      setMenus((prevMenus) => [...prevMenus, newMenu]);
      setShowForm(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    window.location.reload();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
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
            <h2>메뉴를 추가해볼까요?🙇‍♂️</h2>
            <BlackButton onClick={handleAddMenu}>추가하러가기</BlackButton>
            <WhiteButton onClick={handleSuccessModalClose}>
              다음에 하기
            </WhiteButton>
          </ModalContent>
        </Modal>

        {showForm && (
          <Modal open={true} onClose={handleCloseModal}>
            <StyledModalContent>
              <Form onSubmit={handleFormSubmit}>
                <h3>메뉴 추가</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="메뉴 이름"
                  required
                />
                <CustomGreenButton htmlFor="file_upload">
                  <StyledInput
                    type="file"
                    id="file_upload"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                  이미지 업로드
                </CustomGreenButton>
                {selectedImage && (
                  <ImagePreview>
                    <strong>선택한 이미지:</strong> {selectedImage.name}
                  </ImagePreview>
                )}
                <ButtonContainer>
                  <BlackButton type="submit">추가</BlackButton>
                  <WhiteButton onClick={handleSuccessModalClose}>
                    취소
                  </WhiteButton>
                </ButtonContainer>
              </Form>
            </StyledModalContent>
          </Modal>
        )}

        <Modal open={showSuccessModal} onClose={handleSuccessModalClose}>
          <ModalContent>
            <h3>추가 완료</h3>
            <button onClick={handleSuccessModalClose}>확인</button>
          </ModalContent>
        </Modal>
      </AppContainer>
    </>
  );
};

export default App;
