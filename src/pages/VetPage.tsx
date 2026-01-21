import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export const VetPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header as="h2" className="text-center">Asistencia Veterinaria</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Img 
                    variant="top" 
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800"
                    alt="Veterinario con un perro"
                    style={{ borderRadius: '8px' }}
                  />
                </Col>
                <Col md={6}>
                  <Card.Title>Nuestros Servicios</Card.Title>
                  <Card.Text>
                    En Pet-Store, el bienestar de tu mascota es nuestra máxima prioridad. 
                    Ofrecemos una amplia gama de servicios veterinarios para asegurar que tu
                    compañero reciba el mejor cuidado posible.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>✔️ Consultas Generales y Chequeos</ListGroup.Item>
                    <ListGroup.Item>✔️ Calendario de Vacunación Completo</ListGroup.Item>
                    <ListGroup.Item>✔️ Desparasitación Interna y Externa</ListGroup.Item>
                    <ListGroup.Item>✔️ Microchip y Registro</ListGroup.Item>
                    <ListGroup.Item>✔️ Asesoramiento Nutricional</ListGroup.Item>
                    <ListGroup.Item>✔️ Urgencias 24/7 (Llamar al 555-1234)</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="text-muted">
              Para citas o consultas, por favor contáctanos.
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
