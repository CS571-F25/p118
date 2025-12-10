import { Card, Row, Col, Badge } from 'react-bootstrap';

function OutfitCard({ outfit }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <Card.Title as="h3" className="h5 mb-1">{outfit.name}</Card.Title>
            <Card.Text className="text-muted mb-0">{outfit.description}</Card.Text>
          </div>
          <Badge bg="primary" className="text-uppercase">
            {outfit.occasion}
          </Badge>
        </div>
        <Row>
          {outfit.items.map((item, index) => (
            <Col key={index} xs={6} md={3} className="mb-2">
              <div className="position-relative">
                <img 
                  src={item.image} 
                  alt={`${item.name} - part of ${outfit.name} outfit`}
                  className="img-fluid rounded shadow-sm"
                  style={{ height: '120px', objectFit: 'cover', width: '100%' }}
                />
              </div>
              <small className="d-block text-center mt-1 text-muted">{item.name}</small>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default OutfitCard;
