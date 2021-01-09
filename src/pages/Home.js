import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import JokesList from '../components/JokesList';
import { Link } from 'react-router-dom';

const Home = () => {
  const [Category, setCategory] = useState('any');
  const [Active, setActive] = useState(1);

  const favoritejokes = Object.entries(localStorage);

  const filtr = (category, active) => {
    setCategory(category);
    setActive(active);
  };


  return (
    <section>
      <Row>
        <Col sm={4}>
          {' '}
          <div>
            <p className="lead">
              <strong>Kategorie</strong>
            </p>

            <ListGroup variant="flush">
              <ListGroup.Item
                onClick={(e) => filtr('Programming', 1)}
                className={Active === 1 ? 'active' : null}
              >
                Programatorské
              </ListGroup.Item>
              <ListGroup.Item
                onClick={(e) => filtr('Dark', 2)}
                className={Active === 2 ? 'active' : null}
              >
                Černý humor
              </ListGroup.Item>
              <ListGroup.Item
                onClick={(e) => filtr('Spooky', 3)}
                className={Active === 3 ? 'active' : null}
              >
                Horové
              </ListGroup.Item>
              <ListGroup.Item
                onClick={(e) => filtr('Pun', 4)}
                className={Active === 4 ? 'active' : null}
              >
                Slovní hříčka
              </ListGroup.Item>
              <ListGroup.Item
                onClick={(e) => filtr('Miscellaneous', 5)}
                className={Active === 5 ? 'active' : null}
              >
                Ostatní
              </ListGroup.Item>
              <ListGroup.Item
                onClick={(e) => filtr(null, 6)}
                className={Active === 6 ? 'active' : null}
              >
                Oblíbené
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col sm={8}>
          <JokesList category={Category} />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
