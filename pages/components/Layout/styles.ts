import styled, { css } from "styled-components";
import theme from "@/styles/theme";
import { BsGraphUp } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: ${theme.primary};
`;

export const Content = styled.div`
  width: 90vw;
  height: 100vh;
`;

export const Menu = styled(Link)`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  background-color: ${theme.primary};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.secondary};
  }
`;

export const MenuItem = styled.p`
  font-size: 1rem;
  color: ${theme.white};
  font-family: "Montserrat" sans-serif;
  margin-left: 1rem;
`;

function IconStyles() {
  return css`
    color: ${theme.white};
    margin-left: 1rem;
  `;
}

export const IconDashBoard = styled(BsGraphUp)`
  ${IconStyles()}
`;

export const IconList = styled(FaRegListAlt)`
  ${IconStyles()}
`;
