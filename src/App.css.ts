import styled, { keyframes, css } from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const RouletteContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 10px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1440deg); } /* 4회전 */
`;

export const rouletteAnimation = css`
  animation: ${rotate} 3s ease-out;
`;

export const Roulette = styled.div<{ spinning: boolean; segmentAngle: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  ${(props) => props.spinning && rouletteAnimation}
`;

export const RouletteSegment = styled.div<{
  segmentAngle: number;
  index: number;
}>`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: 0% 100%;
  transform: rotate(${(props) => props.index * props.segmentAngle}deg)
    skewY(${(props) => 90 - props.segmentAngle}deg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
    transform: skewY(${(props) => props.segmentAngle - 90}deg);
  }
  span {
    color: #fff;
    transform: skewY(${(props) => props.segmentAngle - 90}deg);
  }
`;

export const SpinButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Winner = styled.div`
  margin-top: 20px;
  color: #ffd700;
`;
