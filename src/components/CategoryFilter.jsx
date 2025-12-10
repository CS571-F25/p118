import { ButtonGroup, Button } from 'react-bootstrap';

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav aria-label="Clothing category filter">
      <ButtonGroup className="flex-wrap" role="group">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'primary' : 'outline-primary'}
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </nav>
  );
}

export default CategoryFilter;
