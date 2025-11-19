import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import ClothingCard from '../components/ClothingCard';
import UploadForm from '../components/UploadForm';

// Mock data for demonstration
const mockClosetItems = [
  {
    id: 1,
    name: 'Blue Denim Jacket',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    tags: ['casual', 'blue', 'denim']
  },
  {
    id: 2,
    name: 'White T-Shirt',
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    tags: ['basic', 'white', 'casual']
  },
  {
    id: 3,
    name: 'Black Jeans',
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1542272454315-7f6d4d6a1fc4?w=400',
    tags: ['casual', 'black', 'denim']
  },
  {
    id: 4,
    name: 'Leather Boots',
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400',
    tags: ['formal', 'brown', 'leather']
  },
  {
    id: 5,
    name: 'Striped Sweater',
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
    tags: ['casual', 'striped', 'warm']
  },
  {
    id: 6,
    name: 'Blazer',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
    tags: ['formal', 'business', 'navy']
  }
];

function MyCloset() {
  const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Accessories'];

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-5 fw-bold mb-2">My Closet</h1>
          <p className="text-muted">Manage your wardrobe collection</p>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Tabs defaultActiveKey="All" className="mb-4">
            {categories.map((category) => (
              <Tab key={category} eventKey={category} title={category}>
                <Row>
                  {mockClosetItems
                    .filter(item => category === 'All' || item.category === category)
                    .map((item) => (
                      <Col key={item.id} md={6} lg={4} className="mb-4">
                        <ClothingCard item={item} />
                      </Col>
                    ))}
                </Row>
              </Tab>
            ))}
          </Tabs>
        </Col>
        <Col lg={4}>
          <UploadForm />
        </Col>
      </Row>
    </Container>
  );
}

export default MyCloset;
