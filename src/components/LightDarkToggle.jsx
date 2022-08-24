import React from 'react';
import styled from 'styled-components';

const Crater = styled.div`
    background-color: lightgrey;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
    transition: all 0.3s ease;

    &:first-child {
        left: 5px;
        top: 15px;
        height: 15px;
        width: 40px;
        transform: rotate(-45deg);
    }
    &:nth-child(2) {
        right: 10px;
        top: 15px;
        height: 15px;
        width: 25px;
        transform: rotate(45deg);
    }
    &:last-child {
        left: 40px;
        bottom: 10px;
        height:20px;
        width: 25px;
        transform: rotate(-45deg);
    }
`;

const Shape = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const ShapeSmall = styled(Shape)`
  height: 5px;
  width: 50px;
  top: 50%;
  left: 60%;
`;

const ShapeMedium = styled(Shape)`
  height: 10px;
  width: 70px;
  top: 25%;
  left: 25%;
  z-index: 2;
`;

const ShapeLarge = styled(Shape)`
  height: 15px;
  width: 100px;
  bottom: 20px;
  left: 25%;
`;

const Notch = styled.div`
  height: 90px;
  width: 90px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 5px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;
  transition: transform 0.4s ease-in-out;
`;

const ToggleContainer = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 50px;
  margin-top: 25px;
  background-image: linear-gradient(aqua, skyblue);
  position: relative;
  cursor: pointer;

  &.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);

    > ${Notch} {
        background-color: whitesmoke;
        box-shadow: 0 0 7px whitesmoke;
        transform: translateX(100px);
    }

    ${Shape} {
        box-shadow: 0 0 10px 2px violet;
        background-color: lightgray;
    }

    ${ShapeSmall} {
        height: 5px;
        width: 5px;
        transform: translate(-40px, 0);

    }

    ${ShapeSmall}:first-of-type {
        transform: translate(-80px, -10px);

    }

    ${ShapeMedium} {
        height: 10px;
        width: 10px;
        transform: translate(10px, 0);

    }

    ${ShapeLarge} {
        height: 15px;
        width: 15px;
        transform: translate(-10px, 0);

    }

    ${Crater} {
        opacity: 1
       

    }
  }
`;



const ShapesContainer = styled.div``;



function LightDarkToggle({ toggled, onClick }) {
  return (
    <ToggleContainer onClick={onClick} className={toggled ? 'night' : ''}>
      <Notch>
        <Crater></Crater>
        <Crater></Crater>
        <Crater></Crater>
      </Notch>
      <ShapesContainer>
        <ShapeSmall></ShapeSmall>
        <ShapeSmall></ShapeSmall>
        <ShapeMedium></ShapeMedium>
        <ShapeLarge></ShapeLarge>
      </ShapesContainer>
    </ToggleContainer>
  );
}

export default LightDarkToggle;
