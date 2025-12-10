import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StatCard from '../components/StatCard';
import { closetItems, outfits } from '../data/closetData';

function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-5 bg-light" aria-labelledby="stats-heading">
        <Container>
          <h2 id="stats-heading" className="visually-hidden">Wardrobe Statistics</h2>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <StatCard 
                icon="👔" 
                value={closetItems.length} 
                label="Clothing Items" 
                variant="primary"
              />
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <StatCard 
                icon="👗" 
                value={outfits.length} 
                label="Saved Outfits" 
                variant="success"
              />
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <StatCard 
                icon="🏷️" 
                value="5" 
                label="Categories" 
                variant="info"
              />
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <StatCard 
                icon="✨" 
                value="AI" 
                label="Powered" 
                variant="warning"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5" aria-labelledby="features-heading">
        <Container>
          <h2 id="features-heading" className="text-center mb-5">What AI Closet Offers</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="display-4 mb-3" role="img" aria-label="Camera icon">📸</div>
                  <h3 className="h5">Digital Wardrobe</h3>
                  <Card.Text className="text-muted">
                    Upload and organize all your clothing items in one place with smart categorization
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="display-4 mb-3" role="img" aria-label="Sparkles icon">✨</div>
                  <h3 className="h5">AI Recommendations</h3>
                  <Card.Text className="text-muted">
                    Get personalized outfit suggestions powered by Claude AI based on occasion and weather
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="display-4 mb-3" role="img" aria-label="Palette icon">🎨</div>
                  <h3 className="h5">Style Analysis</h3>
                  <Card.Text className="text-muted">
                    Discover color coordination and style patterns in your wardrobe
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
        aria-labelledby="cta-heading"
      >
        <Container>
          <h2 id="cta-heading" className="display-6 fw-bold mb-3">Ready to Elevate Your Style?</h2>
          <p className="lead mb-4 opacity-75">
            Try our AI-powered style advisor for personalized outfit recommendations
          </p>
          <Link 
            to="/style-advisor" 
            className="btn btn-light btn-lg fw-semibold"
          >
            Get Started with AI Advisor
          </Link>
        </Container>
      </section>
    </main>
  );
}

export default Home;
