import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";

function App() {
  return (
    <>
      <Main>
        <TicTacToe />
      </Main>
      <Footer>
        <FooterInner>
          <center>
          Source Code <a href="https://github.com/Clarity-89/React_tic_tac_toe">Link</a><br></br>
          Edit by : Kharisma Rizki Hidayatullah (1119101801){" "}<br></br>
          SP3.2 - Kecerdasan Buatan<br></br>
          <a href="https://github.com/Clarity-89/React_tic_tac_toe">Link Github</a></center>
        </FooterInner>
      </Footer>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 0 auto;
`;

const FooterInner = styled.div`
  padding: 16px 0;
  color: #fff;
`;
export default App;
