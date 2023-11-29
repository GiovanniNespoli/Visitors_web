import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 85%;
`;

export const GraphSquadsContent = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
`;

export const Grid = styled.div`
  height: 85%;
  width: 95%;
  margin: auto;
`;

export const GraphSquad = styled.div`
  width: 25%;
  height: 95%;
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.25s;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 1.8rem;
  }

  h1,
  h3 {
    font-weight: normal;
  }

  p {
    font-size: 2.5rem;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GraphTotalVisitors = styled.div`
  width: 100%;
  height: 40%;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    h3 {
      display: flex;
    }
  }
`;

export const GraphText = styled.h3`
  padding-left: 10px;
  color: red;
`;

export const LineChartContent = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: center;
`;
