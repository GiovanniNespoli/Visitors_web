import styled, { css } from "styled-components";
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

function percentageColor(data: number) {
  if (data >= 100) {
    return css`
      width: 100%;
      background-color: ${theme.blue};
    `;
  }

  if (data <= 33) {
    return css`
      width: ${data}%;
      background-color: ${theme.red};
    `;
  }
  if (data > 33 && data <= 66) {
    return css`
      width: ${data}%;
      background-color: ${theme.yellow};
    `;
  }
  if (data > 66) {
    return css`
      width: ${data}%;
      background-color: ${theme.green};
    `;
  }
}

export const FillGraph = styled.div<{ total: number }>`
  height: 100%;
  ${(props) => percentageColor(props.total)}
  border-radius: 10px;
`;

export const GraphInformations = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
