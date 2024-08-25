import React from "react";
import styled, { keyframes } from "styled-components";

const autoRun = keyframes`
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
`;

const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #d2d2d2;
    background-image: repeating-linear-gradient(
        to right,
        transparent 0 100px,
        #25283b22 100px 101px
      ),
      repeating-linear-gradient(to bottom, transparent 0 100px, #25283b22 100px 101px);
  }
  body::before {
    position: absolute;
    width: min(1400px, 90vw);
    top: 10%;
    left: 50%;
    height: 90%;
    transform: translateX(-50%);
    content: "";
    background-image: url(images/bg.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    pointer-events: none;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  position: absolute;
  width: 200px;
  height: 250px;
  top: 10%;
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: ${autoRun} 20s linear infinite;
  z-index: 2;

  @media screen and (max-width: 1023px) {
    width: 160px;
    height: 200px;
    left: calc(50% - 80px);
    .item {
      transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(300px);
    }
  }

  @media screen and (max-width: 767px) {
    width: 100px;
    height: 150px;
    left: calc(50% - 50px);
    .item {
      transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(180px);
    }
  }
`;

const Item = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
    translateZ(550px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(1400px, 100vw);
  height: max-content;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  h1 {
    font-family: "ICA Rubrik";
    font-size: 16em;
    line-height: 1em;
    color: #25283b;
    position: relative;

    &::after {
      position: absolute;
      inset: 0 0 0 0;
      content: attr(data-content);
      z-index: 2;
      -webkit-text-stroke: 2px #d2d2d2;
      color: transparent;
    }
  }

  .author {
    font-family: Poppins;
    text-align: right;
    max-width: 200px;

    @media screen and (max-width: 1023px) {
      color: #fff;
      padding: 20px;
      text-shadow: 0 10px 20px #000;
      z-index: 2;
      max-width: unset;
      width: 100%;
      text-align: center;
      padding: 0 30px;
    }
  }

  h2 {
    font-size: 3em;
  }

  @media screen and (max-width: 1023px) {
    h1 {
      text-align: center;
      width: 100%;
      text-shadow: 0 10px 20px #000;
      font-size: 7em;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 5em;
    }
  }
`;

const Model = styled.div`
  background-image: url(images/model.png);
  width: 100%;
  height: 75vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: auto 130%;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 1;
`;

const App = () => (
  <>
    <GlobalStyles />
    <Banner>
      <Slider style={{ "--quantity": 10 }}>
        {[...Array(10)].map((_, i) => (
          <Item key={i} style={{ "--position": i + 1 }}>
            <img src={`src/images/dragon_${i + 1}.jpg`} alt={`dragon_${i + 1}`} />
          </Item>
        ))}
      </Slider>
      <Content>
        <h1 data-content="RUDRA">RUDRA</h1>
        <div className="author">
          <h2>Rudra</h2>
          <p><b>AI - brain</b></p>
          <p>An AI brain which is redy to do anything for you</p>
        </div>
        <Model />
      </Content>
    </Banner>
  </>
);

export default App;
