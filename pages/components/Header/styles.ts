import styled from "styled-components";
import theme from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 15%;
  background-color: ${theme.secondary};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h3 {
    color: ${theme.white};
  }

  h1 {
    padding-bottom: 10px;
  }
`;