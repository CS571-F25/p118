import { Container, Row, Col, Card } from 'react-bootstrap';
import StyleAdvisor from '../components/StyleAdvisor';
import WeatherWidget from '../components/WeatherWidget';
import { closetItems } from '../data/closetData';

function StyleAdvisorPage() {
  // Get unique colors from closet for display
  const uniqueColors = [...new Set(closetItems.map(item => item.colorName))];
  
  return (
    <main>
      <section 
        className="py-4 text-white"
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
        aria-labelledby="style-advisor-heading"
      >
        <Container>
          <h1 id="style-advisor-heading" className="display-5 fw-bold mb-2">
            AI Style Advisor
          </h1>
          <p className="lead opacity-75 mb-0">
            Get personalized outfit recommendations powered by Claude AI
          </p>
        </Container>
      </section>

      <Container className="py-5">
        <Row>
          <Col lg={8} className="mb-4">
            <StyleAdvisor />
          </Col>
          <Col lg={4}>
            <div className="mb-4">
              <WeatherWidget />
            </div>
            
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5 mb-3">Your Wardrobe Stats</h2>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Total Items</span>
                    <strong>{closetItems.length}</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Categories</span>
                    <strong>5</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Colors</span>
                    <strong>{uniqueColors.length}</strong>
                  </li>
                  <li className="d-flex justify-content-between py-2">
                    <span>Styles</span>
                    <strong>3</strong>
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="shadow-sm mt-4">
              <Card.Body>
                <h2 className="h5 mb-3">How It Works</h2>
                <ol className="ps-3 mb-0">
                  <li className="mb-2">Select your occasion</li>
                  <li className="mb-2">Choose the weather conditions</li>
                  <li className="mb-2">Add any preferences (optional)</li>
                  <li>Get AI-powered outfit recommendations!</li>
                </ol>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default StyleAdvisorPage;
