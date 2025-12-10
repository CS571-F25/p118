import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      sticky="top"
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span role="img" aria-label="Shirt emoji">👔</span> AI Closet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" aria-label="Toggle navigation menu" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={isActive('/')}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/closet"
              active={isActive('/closet')}
              aria-current={isActive('/closet') ? 'page' : undefined}
            >
              My Closet
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/outfits"
              active={isActive('/outfits')}
              aria-current={isActive('/outfits') ? 'page' : undefined}
            >
              Outfits
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/style-advisor"
              active={isActive('/style-advisor')}
              aria-current={isActive('/style-advisor') ? 'page' : undefined}
              className="text-warning"
            >
              ✨ AI Advisor
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about"
              active={isActive('/about')}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
