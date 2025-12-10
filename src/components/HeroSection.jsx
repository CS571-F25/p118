import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section 
      className="py-5 text-white"
      style={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}
      aria-labelledby="hero-heading"
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <span className="badge bg-primary mb-3 px-3 py-2">AI-Powered Fashion</span>
            <h1 id="hero-heading" className="display-4 fw-bold mb-4">
              Your Intelligent <span style={{ color: '#667eea' }}>Wardrobe</span> Assistant
            </h1>
            <p className="lead mb-4 opacity-75">
              Organize your closet, get AI-powered outfit recommendations, and discover 
              your personal style with our smart fashion platform.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Button 
                as={Link} 
                to="/closet" 
                variant="primary" 
                size="lg"
                className="px-4"
              >
                Open My Closet
              </Button>
              <Button 
                as={Link} 
                to="/style-advisor" 
                variant="outline-light" 
                size="lg"
                className="px-4"
              >
                Try AI Advisor
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div 
              className="p-4 rounded-4" 
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(10px)' 
              }}
            >
              <div className="display-1 mb-3" aria-hidden="true">👔👗👟</div>
              <p className="mb-0 opacity-75">Smart Fashion, Simplified</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
