import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-5 fw-bold mb-2">About AI Closet</h1>
          <p className="lead text-muted">
            Your personal fashion assistant powered by smart technology
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3>Our Mission</h3>
              <p>
                AI Closet is designed to simplify your daily fashion decisions by helping you 
                organize your wardrobe digitally and providing intelligent outfit recommendations 
                tailored to your style and needs.
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3>How It Works</h3>
              <ol>
                <li className="mb-2">
                  <strong>Upload Your Wardrobe:</strong> Add photos of your clothing items 
                  with simple categorization
                </li>
                <li className="mb-2">
                  <strong>Smart Organization:</strong> We help you tag and organize items 
                  by category, color, and style
                </li>
                <li className="mb-2">
                  <strong>Get Recommendations:</strong> Receive outfit suggestions based on 
                  occasion, weather, and your personal style
                </li>
              </ol>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <h3>Features</h3>
              <ul>
                <li>Digital wardrobe management</li>
                <li>Outfit recommendations for any occasion</li>
                <li>Style categorization and tagging</li>
                <li>Visual organization of your closet</li>
                <li>Easy-to-use interface built with React</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm bg-light">
            <Card.Body>
              <h4 className="mb-4">Technology Stack</h4>
              <div className="mb-3">
                <strong>Frontend:</strong>
                <ul className="mt-2">
                  <li>React 19</li>
                  <li>React Router</li>
                  <li>React Bootstrap</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div className="mb-3">
                <strong>Deployment:</strong>
                <ul className="mt-2">
                  <li>GitHub Pages</li>
                  <li>Continuous Deployment</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
