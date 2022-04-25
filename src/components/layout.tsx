import { useContext } from "react";
import { MainContext } from "../context/context";
import { Helmet } from "react-helmet";
import { ContextProps } from "../models";
import { GlobalStyles } from "../styles/globalStyles";
import SideBar from "./sidebar";
import Footer from "./footer";
import styled from "styled-components";
import ChanceButton from "./chanceButton";

const MainWrapper = styled.main<{}>`
  position: relative;
  padding: 1px;
  h1 {
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    margin: 0;
    margin-top: 50px;
  }
`;

export default function Layout({ children, title }: ContextProps) {
  const darkmode = useContext(MainContext!);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {darkmode ? (
        <GlobalStyles
          open={darkmode?.open.open}
          darkmode={darkmode?.darkmode.darkmode}
        />
      ) : null}
      <SideBar />
      <MainWrapper>
        <section className="container">
          <div className="row">
            <h1 className="mb-3 title">{title}</h1>
          </div>
          {children}
        </section>

        <ChanceButton />
      </MainWrapper>
      <Footer />
    </>
  );
}
