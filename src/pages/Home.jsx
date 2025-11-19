import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h1 className="display-4 fw-bold mb-4">Welcome to AI Closet</h1>
          <p className="lead mb-4">
            Your intelligent fashion assistant that helps you organize your wardrobe 
            and create perfect outfits for any occasion.
          </p>
          <div className="d-flex gap-3">
            <Button as={Link} to="/closet" variant="primary" size="lg">
              View My Closet
            </Button>
            <Button as={Link} to="/outfits" variant="outline-primary" size="lg">
              Browse Outfits
            </Button>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="p-5 bg-light rounded">
            <h2 className="display-1">👔</h2>
            <p className="text-muted">Smart Fashion, Simplified</p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body>
              <div className="display-4 mb-3">📸</div>
              <Card.Title>Digital Wardrobe</Card.Title>
              <Card.Text>
                Upload and organize all your clothing items in one place
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body>
              <div className="display-4 mb-3">✨</div>
              <Card.Title>Smart Recommendations</Card.Title>
              <Card.Text>
                Get outfit suggestions based on occasion and style
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body>
              <div className="display-4 mb-3">🎨</div>
              <Card.Title>Style Analysis</Card.Title>
              <Card.Text>
                Discover your unique style and get personalized tips
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
