import { Card, Badge } from 'react-bootstrap';

function ClothingCard({ item }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={item.image} 
        alt={item.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="text-muted">{item.category}</Card.Text>
        <div>
          {item.tags && item.tags.map((tag, index) => (
            <Badge key={index} bg="secondary" className="me-1 mb-1">
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ClothingCard;
