import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function About() {
  return (
    <main>
      {/* Page Header */}
      <section 
        className="py-4 bg-dark text-white"
        aria-labelledby="about-heading"
      >
        <Container>
          <h1 id="about-heading" className="display-5 fw-bold mb-2">About AI Closet</h1>
          <p className="lead opacity-75 mb-0">
            Your personal fashion assistant powered by artificial intelligence
          </p>
        </Container>
      </section>

      <Container className="py-5">
        <Row>
          <Col lg={8}>
            {/* Mission Section */}
            <Card className="shadow-sm mb-4">
              <Card.Body className="p-4">
                <h2 className="h4 mb-3">Our Mission</h2>
                <p className="mb-0">
                  AI Closet is designed to simplify your daily fashion decisions by helping you 
                  organize your wardrobe digitally and providing intelligent outfit recommendations 
                  tailored to your style and needs. We combine modern web technology with AI to 
                  create a seamless fashion experience.
                </p>
              </Card.Body>
            </Card>

            {/* How It Works Section */}
            <Card className="shadow-sm mb-4">
              <Card.Body className="p-4">
                <h2 className="h4 mb-3">How It Works</h2>
                <ol className="mb-0">
                  <li className="mb-3">
                    <strong>Upload Your Wardrobe:</strong> Add photos of your clothing items 
                    with simple categorization by type, color, and style.
                  </li>
                  <li className="mb-3">
                    <strong>Smart Organization:</strong> We help you tag and organize items 
                    by category, color, season, and occasion for easy browsing.
                  </li>
                  <li className="mb-3">
                    <strong>Browse Outfit Ideas:</strong> View pre-curated outfit combinations
                    organized by occasion - from casual to formal.
                  </li>
                  <li className="mb-0">
                    <strong>Get AI Recommendations:</strong> Use our Claude-powered Style Advisor
                    for personalized outfit suggestions based on your occasion, weather, and preferences.
                  </li>
                </ol>
              </Card.Body>
            </Card>

            {/* Features Section */}
            <Card className="shadow-sm mb-4">
              <Card.Body className="p-4">
                <h2 className="h4 mb-3">Key Features</h2>
                <Row>
                  <Col md={6}>
                    <ul>
                      <li className="mb-2">Digital wardrobe management</li>
                      <li className="mb-2">AI-powered outfit recommendations</li>
                      <li className="mb-2">Category and color filtering</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul>
                      <li className="mb-2">Weather-aware suggestions</li>
                      <li className="mb-2">Occasion-based styling</li>
                      <li className="mb-2">Responsive design for all devices</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Accessibility Section */}
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h4 mb-3">Accessibility Commitment</h2>
                <p>
                  We are committed to making AI Closet accessible to everyone. Our application includes:
                </p>
                <ul className="mb-0">
                  <li className="mb-2">Proper heading hierarchy for screen readers</li>
                  <li className="mb-2">Descriptive alt text on all images</li>
                  <li className="mb-2">WCAG AA compliant color contrast</li>
                  <li className="mb-2">Fully labeled form inputs</li>
                  <li>Complete keyboard navigation support</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <Card className="shadow-sm mb-4 bg-light">
              <Card.Body className="p-4">
                <h2 className="h5 mb-4">Technology Stack</h2>
                <div className="mb-4">
                  <h3 className="h6 text-muted mb-2">Frontend</h3>
                  <div>
                    <Badge bg="primary" className="me-1 mb-1">React 19</Badge>
                    <Badge bg="primary" className="me-1 mb-1">React Router</Badge>
                    <Badge bg="primary" className="me-1 mb-1">React Bootstrap</Badge>
                    <Badge bg="primary" className="me-1 mb-1">Vite</Badge>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="h6 text-muted mb-2">AI Integration</h3>
                  <div>
                    <Badge bg="success" className="me-1 mb-1">Claude API</Badge>
                    <Badge bg="success" className="me-1 mb-1">Anthropic</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="h6 text-muted mb-2">Deployment</h3>
                  <div>
                    <Badge bg="dark" className="me-1 mb-1">GitHub Pages</Badge>
                    <Badge bg="dark" className="me-1 mb-1">CI/CD</Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h5 mb-3">Project Info</h2>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Course</span>
                    <strong>CS571</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Semester</span>
                    <strong>Fall 2025</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Type</span>
                    <strong>Web Project</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2">
                    <span>Author</span>
                    <strong>Hayden Hamilton</strong>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;
