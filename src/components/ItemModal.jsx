import { Modal, Badge, Button, Row, Col } from 'react-bootstrap';
import ColorPalette from './ColorPalette';

function ItemModal({ show, onHide, item }) {
  if (!item) return null;

  // Generate color palette from item
  const getColorsFromItem = (item) => {
    const colorMap = {
      blue: { hex: '#3b82f6', name: 'Blue' },
      white: { hex: '#ffffff', name: 'White' },
      black: { hex: '#1f2937', name: 'Black' },
      brown: { hex: '#92400e', name: 'Brown' },
      navy: { hex: '#1e3a5f', name: 'Navy' },
      denim: { hex: '#6b7db3', name: 'Denim Blue' },
      striped: { hex: '#e5e7eb', name: 'Neutral' }
    };
    
    return item.tags
      ?.map(tag => colorMap[tag.toLowerCase()])
      .filter(Boolean) || [];
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      size="lg"
      aria-labelledby="item-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="item-modal-title">{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <img
              src={item.image}
              alt={`${item.name} - ${item.category} item`}
              className="img-fluid rounded shadow-sm"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <h3 className="h5 mt-3 mt-md-0">Details</h3>
            <dl>
              <dt>Category</dt>
              <dd>{item.category}</dd>
              
              <dt className="mt-3">Tags</dt>
              <dd>
                {item.tags?.map((tag, index) => (
                  <Badge key={index} bg="secondary" className="me-1 mb-1">
                    {tag}
                  </Badge>
                ))}
              </dd>
              
              <dt className="mt-3">Colors</dt>
              <dd>
                <ColorPalette colors={getColorsFromItem(item)} />
              </dd>
            </dl>
            
            <div className="mt-4 p-3 bg-light rounded">
              <h4 className="h6">Style Notes</h4>
              <p className="small text-muted mb-0">
                This {item.category.toLowerCase()} piece works great for {item.tags?.includes('formal') ? 'professional settings' : 'casual occasions'}. 
                Pair it with complementary items from your closet for a complete look.
              </p>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Remove from Closet
        </Button>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemModal;
