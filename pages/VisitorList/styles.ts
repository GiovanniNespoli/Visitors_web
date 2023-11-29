import styled from "styled-components";
import theme from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 85%;
`;

export const Grid = styled.div`
  height: 85%;
  width: 95%;
  margin: auto;

  display: flex;
  align-items: center;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 7.5%;

  div {
    width: 20%;
    height: 100%;
  }
`;
export const TableHeaderContainer = styled.div`
  width: 100%;
  height: 7.5%;

  display: flex;

  div {
    width: 20%;
    height: 100%;

    display: flex;
    align-items: center;

    font-weight: bold;
    font-size: 1.2rem;

    margin-left: 5px;
  }
`;

export const TableIcons = styled.div`
  width: 95%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background-color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);

      svg {
        color: ${theme.blue};
      }
    }
  }
`;

export const TableBodyContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;
  margin-top: 1rem;
`;

export const TableRow = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;

  display: flex;
`;

export const TableItem = styled.div`
  width: 20%;
  height: 100%;
`;

export const Item = styled.div`
  width: 95%;
  height: 100%;
  background-color: ${theme.backgroundTable};
  border-radius: 2rem;

  display: flex;
  align-items: center;

  input,
  p {
    margin-left: 10px;
  }

  input {
    width: 90%;
    height: 100%;
    border: none;
    background-color: ${theme.backgroundTable};
    color: ${theme.black};

    &::placeholder {
      font-size: 1rem;
      color: ${theme.black};
    }
  }
`;
