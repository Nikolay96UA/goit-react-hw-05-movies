import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
`;

export const Nav = styled.nav`
  position: relative;
  padding: 15px 25px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 15px 20px -10px #00b3e5;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px 15px;
  border-radius: 4px;
  &.active {
    background: linear-gradient(to left, #90cea1, #00b3e5);
    color: white;
  }
`;
