import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import ClothingCard from '../components/ClothingCard';
import UploadForm from '../components/UploadForm';
import CategoryFilter from '../components/CategoryFilter';
import ItemModal from '../components/ItemModal';
import { closetItems, categories } from '../data/closetData';

function MyCloset() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredItems = activeCategory === 'All' 
    ? closetItems 
    : closetItems.filter(item => item.category === activeCategory);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <main>
      {/* Page Header */}
      <section 
        className="py-4 bg-dark text-white"
        aria-labelledby="closet-heading"
      >
        <Container>
          <h1 id="closet-heading" className="display-5 fw-bold mb-2">My Closet</h1>
          <p className="lead opacity-75 mb-0">
            Manage and organize your wardrobe collection
          </p>
        </Container>
      </section>

      <Container className="py-5">
        <Row>
          {/* Main Content */}
          <Col lg={8}>
            {/* Category Filter */}
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h2 className="h5 mb-3">Filter by Category</h2>
                <CategoryFilter 
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </Card.Body>
            </Card>

            {/* Items Grid */}
            <section aria-labelledby="items-heading">
              <h2 id="items-heading" className="h5 mb-3">
                {activeCategory === 'All' ? 'All Items' : activeCategory} 
                <span className="text-muted ms-2">({filteredItems.length})</span>
              </h2>
              <Row>
                {filteredItems.map((item) => (
                  <Col key={item.id} sm={6} lg={4} className="mb-4">
                    <div 
                      onClick={() => handleItemClick(item)}
                      onKeyDown={(e) => e.key === 'Enter' && handleItemClick(item)}
                      tabIndex={0}
                      role="button"
                      aria-label={`View details for ${item.name}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <ClothingCard item={item} />
                    </div>
                  </Col>
                ))}
              </Row>
              {filteredItems.length === 0 && (
                <div className="text-center py-5">
                  <p className="text-muted">No items found in this category.</p>
                </div>
              )}
            </section>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <div className="sticky-top" style={{ top: '80px' }}>
              <UploadForm />
              
              <Card className="shadow-sm mt-4">
                <Card.Body>
                  <h2 className="h5 mb-3">Closet Summary</h2>
                  <ul className="list-unstyled mb-0">
                    {categories.filter(c => c !== 'All').map((cat) => {
                      const count = closetItems.filter(i => i.category === cat).length;
                      return (
                        <li key={cat} className="d-flex justify-content-between py-2 border-bottom">
                          <span>{cat}</span>
                          <strong>{count}</strong>
                        </li>
                      );
                    })}
                    <li className="d-flex justify-content-between py-2 fw-bold">
                      <span>Total</span>
                      <span>{closetItems.length}</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Item Detail Modal */}
      <ItemModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        item={selectedItem}
      />
    </main>
  );
}

export default MyCloset;
