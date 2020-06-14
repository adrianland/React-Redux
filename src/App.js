import React from 'react';
import Formulario from './component/Formulario'
import Comentario from './component/Comentario'
import { Container,Row,Col } from 'reactstrap'

function App() {
  return (
    <Container >
      <Row>
        <Col xs="6">
        <Formulario/>
        </Col>
        <Col xs="6">
        <Comentario/>
        </Col>
      </Row>
        
    </Container>
  );
}

export default App;
