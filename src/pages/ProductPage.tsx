import { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { products, Product } from '../data/products';

type AnimalFilter = 'all' | 'dog' | 'cat';
type CategoryFilter = 'all' | 'food' | 'toy' | 'health' | 'accessories';

export const ProductPage = () => {
  const [animalFilter, setAnimalFilter] = useState<AnimalFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');

  const filteredProducts = products.filter(product => {
    const animalMatch = animalFilter === 'all' || product.animal === animalFilter;
    const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
    return animalMatch && categoryMatch;
  });

  return (
    <Container className="mt-4">
      <Row className="mb-4 justify-content-center">
        <Col xs="auto">
          <h5>Filtrar por Animal</h5>
          <ButtonGroup>
            <Button variant={animalFilter === 'all' ? 'primary' : 'outline-primary'} onClick={() => setAnimalFilter('all')}>Todos</Button>
            <Button variant={animalFilter === 'dog' ? 'primary' : 'outline-primary'} onClick={() => setAnimalFilter('dog')}>Perros</Button>
            <Button variant={animalFilter === 'cat' ? 'primary' : 'outline-primary'} onClick={() => setAnimalFilter('cat')}>Gatos</Button>
          </ButtonGroup>
        </Col>
        <Col xs="auto">
          <h5>Filtrar por Categoría</h5>
          <ButtonGroup>
            <Button variant={categoryFilter === 'all' ? 'primary' : 'outline-primary'} onClick={() => setCategoryFilter('all')}>Todas</Button>
            <Button variant={categoryFilter === 'food' ? 'primary' : 'outline-primary'} onClick={() => setCategoryFilter('food')}>Comida</Button>
            <Button variant={categoryFilter === 'toy' ? 'primary' : 'outline-primary'} onClick={() => setCategoryFilter('toy')}>Juguetes</Button>
            <Button variant={categoryFilter === 'health' ? 'primary' : 'outline-primary'} onClick={() => setCategoryFilter('health')}>Salud</Button>
            <Button variant={categoryFilter === 'accessories' ? 'primary' : 'outline-primary'} onClick={() => setCategoryFilter('accessories')}>Accesorios</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <strong className="text-muted">Precio: ${product.price.toFixed(2)}</strong>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <h4>No se encontraron productos que coincidan con los filtros.</h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};
