import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Header.css'

const Header = () => {
  return (
    <section>
      <Jumbotron fluid>
        <Container fluid>
          <h1>Art of Entertainment!</h1>
        </Container>
      </Jumbotron>

    </section>

  )
}

export default Header