import styled from "styled-components";
import theme from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: normal;
  }
`;

export const GraphContent = styled.div`
  width: 90%;
  height: 20px;
  background-color: ${theme.barProgressBackground};
  border-radius: 10px;
`;

export const FillGraph = styled.div`
  width: 80%;
  height: 100%;
  background-color: green;
  border-radius: 10px;
`;

export const GraphInformations = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;