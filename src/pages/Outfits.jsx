import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OutfitCard from '../components/OutfitCard';
import CategoryFilter from '../components/CategoryFilter';
import { outfits, occasions } from '../data/closetData';

function Outfits() {
  const [filter, setFilter] = useState('All');

  const filteredOutfits = filter === 'All' 
    ? outfits 
    : outfits.filter(outfit => outfit.occasion === filter);

  return (
    <main>
      {/* Page Header */}
      <section 
        className="py-4 text-white"
        style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}
        aria-labelledby="outfits-heading"
      >
        <Container>
          <h1 id="outfits-heading" className="display-5 fw-bold mb-2">Outfit Ideas</h1>
          <p className="lead opacity-75 mb-0">
            Pre-curated outfit combinations from your wardrobe
          </p>
        </Container>
      </section>

      <Container className="py-5">
        <Row>
          <Col lg={8}>
            {/* Occasion Filter */}
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h2 className="h5 mb-3">Filter by Occasion</h2>
                <CategoryFilter 
                  categories={occasions}
                  activeCategory={filter}
                  onCategoryChange={setFilter}
                />
              </Card.Body>
            </Card>

            {/* Outfits List */}
            <section aria-labelledby="outfit-list-heading">
              <h2 id="outfit-list-heading" className="h5 mb-3">
                {filter === 'All' ? 'All Outfits' : `${filter} Outfits`}
                <span className="text-muted ms-2">({filteredOutfits.length})</span>
              </h2>
              
              {filteredOutfits.length > 0 ? (
                filteredOutfits.map((outfit) => (
                  <OutfitCard key={outfit.id} outfit={outfit} />
                ))
              ) : (
                <Card className="text-center py-5">
                  <Card.Body>
                    <p className="text-muted mb-0">No outfits found for this occasion.</p>
                  </Card.Body>
                </Card>
              )}
            </section>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <Card className="shadow-sm mb-4 border-0 bg-gradient text-white" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <Card.Body className="text-center py-4">
                <div className="display-4 mb-3" role="img" aria-label="Sparkle icon">✨</div>
                <h2 className="h5 mb-3">Want Personalized Suggestions?</h2>
                <p className="opacity-75 mb-3">
                  Try our AI Style Advisor for outfit recommendations tailored to your occasion and preferences
                </p>
                <Link 
                  to="/style-advisor" 
                  className="btn btn-light fw-semibold"
                >
                  Get AI Advice
                </Link>
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5 mb-3">Outfit Tips</h2>
                <ul className="ps-3 mb-0">
                  <li className="mb-2">Start with a neutral base and add color accents</li>
                  <li className="mb-2">Match your metals (belt, watch, jewelry)</li>
                  <li className="mb-2">Consider the 3-color rule for balanced looks</li>
                  <li className="mb-2">Dress for the occasion, then add your personal style</li>
                  <li>When in doubt, classic never fails</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Outfits;
