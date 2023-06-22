import { Link, Outlet } from 'react-router-dom';
import { Container, Nav, StyledNavLink } from './SharedLayout.styled';
import { HandySvg } from 'handy-svg';
import { Suspense } from 'react';
import iconNav from '../../icon/tmdb-icon.svg';
import { Dna } from 'react-loader-spinner';

function SharedLayout() {
  return (
    <Container>
      <header>
        <Nav>
          <Link to="/">
            <HandySvg src={iconNav} width="150" height="50" />
          </Link>
          <div>
            <StyledNavLink to="/">HOME</StyledNavLink>
            <StyledNavLink to="/movies">MOVIES</StyledNavLink>
          </div>
        </Nav>
      </header>
      <main>
        <Suspense fallback={<Dna />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default SharedLayout;
