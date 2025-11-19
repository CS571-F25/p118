import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import OutfitCard from '../components/OutfitCard';

// Mock outfit data
const mockOutfits = [
  {
    id: 1,
    name: 'Casual Weekend',
    occasion: 'Casual',
    items: [
      { name: 'White T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
      { name: 'Blue Jeans', image: 'https://images.unsplash.com/photo-1542272454315-7f6d4d6a1fc4?w=400' },
      { name: 'Sneakers', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400' },
      { name: 'Denim Jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400' }
    ]
  },
  {
    id: 2,
    name: 'Business Meeting',
    occasion: 'Formal',
    items: [
      { name: 'Navy Blazer', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400' },
      { name: 'White Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
      { name: 'Dress Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400' },
      { name: 'Leather Shoes', image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400' }
    ]
  },
  {
    id: 3,
    name: 'Date Night',
    occasion: 'Evening',
    items: [
      { name: 'Black Sweater', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400' },
      { name: 'Dark Jeans', image: 'https://images.unsplash.com/photo-1542272454315-7f6d4d6a1fc4?w=400' },
      { name: 'Boots', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400' },
      { name: 'Watch', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400' }
    ]
  }
];

function Outfits() {
  const [filter, setFilter] = useState('All');
  
  const occasions = ['All', 'Casual', 'Formal', 'Evening'];

  const filteredOutfits = filter === 'All' 
    ? mockOutfits 
    : mockOutfits.filter(outfit => outfit.occasion === filter);

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={8}>
          <h1 className="display-5 fw-bold mb-2">Outfit Suggestions</h1>
          <p className="text-muted">AI-curated outfit combinations from your closet</p>
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-md-end">
          <ButtonGroup>
            {occasions.map((occasion) => (
              <Button
                key={occasion}
                variant={filter === occasion ? 'primary' : 'outline-primary'}
                onClick={() => setFilter(occasion)}
              >
                {occasion}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          {filteredOutfits.length > 0 ? (
            filteredOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))
          ) : (
            <div className="text-center py-5">
              <p className="text-muted">No outfits found for this occasion.</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Outfits;
