import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const DirectoryItemBody = styled.div`
  text-transform: uppercase;
  height: 90px;
  padding: 5px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.9;
  position: absolute;
  top: calc(50% - 45px);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s;

  &::before {
    content: "";
    display: block;
    top: 50%;
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    transform: scale(0);
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.3s;
    z-index: -1;
  }

  h2 {
    font-weight: bold;
    margin: 0 5px 0;
    font-size: 20px;
    color: #4a4a4a;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    margin-top: 5px;

    &::after {
      content: "";
      display: block;
      margin-top: 2px;
      width: 100%;
      height: 2px;
      background: white;
      transform-origin: left;
      transform: scale(0);
      transition: all 0.3s ease-in;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  margin: 0 10px 20px;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  position: relative;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, .2);
  border-radius: 4px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.15);
    }

    ${DirectoryItemBody} {
      box-shadow: 5px 5px 0 250px rgba(0, 0, 0, .3);

      h2,p{
        color: white;
      }

      p{
        font-weight: 700;
        color: cyan;
        &::after {
          transform: scale(1);
        }
      }

      &::before {
        transform: scale(70);
      }
    }

`;
