import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(20px);

  @media(max-width: 768px){
    align-items: center;
  }
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;

  @media(max-width: 768px){
    font-size: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;

      @media(max-width: 768px){
        margin-right: 12px;
      }
    }
  }

  @media(max-width: 768px){
    font-size: 12px;
  }
`;
