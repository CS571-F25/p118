import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto" role="contentinfo">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h2 className="h5 mb-3">
              <span role="img" aria-label="Shirt emoji">👔</span> AI Closet
            </h2>
            <p className="text-muted small mb-0">
              Your smart fashion assistant powered by Claude AI
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h2 className="h6 mb-3">Quick Links</h2>
            <nav aria-label="Footer navigation">
              <ul className="list-unstyled mb-0">
                <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
                <li><Link to="/closet" className="text-muted text-decoration-none">My Closet</Link></li>
                <li><Link to="/style-advisor" className="text-muted text-decoration-none">AI Advisor</Link></li>
                <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
              </ul>
            </nav>
          </Col>
          <Col md={4}>
            <h2 className="h6 mb-3">Project Info</h2>
            <p className="text-muted small mb-1">CS571 - Fall 2025</p>
            <p className="text-muted small mb-0">Built with React & React Bootstrap</p>
          </Col>
        </Row>
        <hr className="my-3 border-secondary" />
        <div className="text-center">
          <p className="text-muted small mb-0">
            &copy; {new Date().getFullYear()} AI Closet. Hayden Hamilton.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
