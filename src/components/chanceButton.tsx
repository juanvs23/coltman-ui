import { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../context/context";
import { MdModeNight, MdOutlineWbSunny } from "react-icons/md";

const ButtonMode = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: transparent;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 6px var(--secondary-color);
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 999;
`;

export default function ChanceButton() {
  const usedarkmode = useContext(MainContext!);
  const handler = () => {
    if (usedarkmode?.darkmode) {
      const { setDarkmode, darkmode } = usedarkmode.darkmode;
      setDarkmode((darkmode) => !darkmode);
    }
  };

  const chance = usedarkmode?.darkmode.darkmode ? (
    <MdModeNight color="#c1c1c1" size="2rem" />
  ) : (
    <MdOutlineWbSunny color="#c9c00e" size="2rem" />
  );
  return (
    <>
      <ButtonMode onClick={handler}>{chance}</ButtonMode>
    </>
  );
}
