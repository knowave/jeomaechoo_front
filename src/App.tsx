import React, { useEffect, useState } from "react";
import {
  AppContainer,
  Header,
  Roulette,
  RouletteContainer,
  RouletteSegment,
  SpinButton,
  Title,
  Winner,
} from "./App.css";
import { Menu } from "./interfaces/menu.interface";
import { fetchMenus } from "./axios/menu";
import { sendWinningMenu } from "./axios/winning-menu";

const App: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [winner, setWinningMenu] = useState<Menu | null>(null);
  const [spinning, setSpinning] = useState(false);
    const [spinCount, setSpinCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMenus(setMenus);
  }, []);

  const spinRoulette = () => {
    setSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * menus.length);
      const selectedMenu = menus[randomIndex];
      setWinningMenu(selectedMenu);
      sendWinningMenu(selectedMenu.id);
      setSpinning(false);
    }, 3000);
  };

  const segmentAngle = 360 / menus.length;

  return (
    <AppContainer>
      <Header>
        <Title>Jeomaechoo</Title>
        <RouletteContainer>
          <Roulette spinning={spinning} segmentAngle={segmentAngle}>
            {menus.map((menu, index) => (
              <RouletteSegment
                key={menu.id}
                segmentAngle={segmentAngle}
                index={index}
              >
                <img src={menu.image} alt={menu.name} />
                <span>{menu.name}</span>
              </RouletteSegment>
            ))}
          </Roulette>
        </RouletteContainer>
        <SpinButton onClick={spinRoulette} disabled={spinning}>
          {spinning ? "진행중..." : "저메추 룰렛"}
        </SpinButton>
        {winner && (
          <Winner>
            <h2>오늘의 저녁 메뉴가 나왔습니다!</h2>
            <p>{`당첨 메뉴: ${winner.name}`}</p>
          </Winner>
        )}
      </Header>
    </AppContainer>
  );
};

export default App;
