import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const Movie = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 15px 20px -10px #00b3e5;
`;

export const Img = styled.div`
  width: 200px;
  height: 300px;
`;

export const InfoLink = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  padding: 10px;
  margin: 20px;
`;

export const OutletContainer = styled(Outlet)`
  padding: 10px;
`;
