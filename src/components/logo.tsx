import { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { MainContext } from "../context/context";
import { DarkMode } from "../models";

const LogoWrapper = styled.div<{
  darkmode: DarkMode["darkmode"];
  open: boolean;
}>`
  a {
    color: var(--main-text-color);
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    font-weight: 600;
    padding: 16px 0;
    display: block;
    h2 {
      text-align: center;
      font-size: ${(open) => {
        return open.open ? "18px" : "0";
      }};
      margin: 0;
    }
    span {
      font-size: 18px;
    }
  }
`;

export default function LogoComponent() {
  const usedarkmode = useContext(MainContext!);
  const darkmode = usedarkmode ? usedarkmode?.darkmode.darkmode : false;
  const open = usedarkmode ? usedarkmode?.open.open : true;
  return (
    <LogoWrapper open={open} darkmode={darkmode}>
      {" "}
      <Link to={"/"}>
        {" "}
        <h2>
          {" "}
          <span style={{ color: "#F7542E" }}> Dev </span>challenges.io{" "}
        </h2>{" "}
      </Link>
    </LogoWrapper>
  );
}
