import { Card, Badge } from 'react-bootstrap';

function ClothingCard({ item }) {
  return (
    <Card className="h-100 shadow-sm clothing-card">
      <Card.Img 
        variant="top" 
        src={item.image} 
        alt={`${item.name} - ${item.colorName} ${item.category.toLowerCase()} by ${item.brand}`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title as="h3" className="h6 mb-1">{item.name}</Card.Title>
        <Card.Text className="text-muted small mb-2">{item.category} • {item.style}</Card.Text>
        <div className="d-flex align-items-center gap-2 mb-2">
          <div 
            style={{
              width: 16,
              height: 16,
              backgroundColor: item.color,
              borderRadius: '50%',
              border: '1px solid #dee2e6'
            }}
            aria-hidden="true"
          />
          <small className="text-muted">{item.colorName}</small>
        </div>
        <div>
          {item.tags && item.tags.slice(0, 3).map((tag, index) => (
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
