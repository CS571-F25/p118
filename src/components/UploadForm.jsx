import { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

function UploadForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    e.target.reset();
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Add New Item</Card.Title>
        {showSuccess && (
          <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
            Item added successfully!
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="e.g., Blue Denim Jacket" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select required>
              <option value="">Select category...</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="outerwear">Outerwear</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="url" placeholder="https://..." required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tags (comma separated)</Form.Label>
            <Form.Control type="text" placeholder="casual, blue, denim" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Add to Closet
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default UploadForm;
