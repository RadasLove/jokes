import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import JokesList from '../components/JokesList';


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
      <Row className="text-center">
        <Col sm={12}>
          {' '}
          <div>
            <h2>
              <strong>Kategorie vtipu </strong>
            </h2>
            <ListGroup horizontal className="flex-wrap justify-content-center m-5 kategorie">
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
                onClick={(e) => filtr('Pun', 3)}
                className={Active === 3 ? 'active' : null}
              >
                Slovní hříčka
              </ListGroup.Item>
              <ListGroup.Item
                onClick={(e) => filtr('Miscellaneous', 4)}
                className={Active === 4 ? 'active' : null}
              >
                Ostatní
              </ListGroup.Item>

              <ListGroup.Item
                onClick={(e) => filtr(null, 5)}
                className={Active === 5? 'active' : null}
              >
           Oblíbené
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col sm={8} className="mx-auto">
          <JokesList category={Category} />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
