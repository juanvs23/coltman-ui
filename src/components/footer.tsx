import styled from "styled-components";

const FooterComponent = styled.footer`
 background-color:var(--main-color);
 border:none;
 position:relative;
 margin-top:-2px;
  bottom: 0;
  width: 100%;
  padding: 24px;
  font-family: montserrat;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  a {
    color: var(--secondary-text-color);
    text-decoration: none;
    font-weight: 700;
  }
`;

export default function Footer() {
  return (
    <FooterComponent>
      created by{" "}
      <a href="mailto:juanvs23@gmail.com" target={"_blank"}>
        Juan Carlos Avila
      </a>{" "}
      - devChallenges.io
    </FooterComponent>
  );
}
