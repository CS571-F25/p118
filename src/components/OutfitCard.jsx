import { Card, Row, Col } from 'react-bootstrap';

function OutfitCard({ outfit }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{outfit.name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{outfit.occasion}</Card.Subtitle>
        <Row>
          {outfit.items.map((item, index) => (
            <Col key={index} xs={6} md={3} className="mb-2">
              <img 
                src={item.image} 
                alt={item.name}
                className="img-fluid rounded"
                style={{ height: '120px', objectFit: 'cover', width: '100%' }}
              />
              <small className="d-block text-center mt-1">{item.name}</small>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default OutfitCard;
