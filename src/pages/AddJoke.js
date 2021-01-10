import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const AddJoke = () => {
  const [Values, setValues] = useState({
    email: '',
    category: '',
    joke: '',
  });

  const [ShowResult, setShowResult] = useState('');
  const [Loading, setLoading] = useState(false);

  const options = {
    method: 'POST',
    url: `https://my-json-server.typicode.com/RadasLove/jouky/jokes`,
    data: { Values },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setLoading(false);
        setShowResult({
          ...ShowResult,
          status: response.status,
          url: response.config.url,
          method: response.config.method,
          data: response.data.Values,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  const alert = () => {
    return (
      <Alert className="m-5" variant="success" onClose={() => setShowResult('')} dismissible>
        <Alert.Heading>Děkujeme. Váš joke byl úspěšné přídán</Alert.Heading>
        <dl class="row">
          <dt class="col-sm-3">Status</dt>
          <dd class="col-sm-9">{ShowResult.status}</dd>


          <dt class="col-sm-3">Metoda</dt>
          <dd class="col-sm-9">{ShowResult.method}</dd>

          <dt class="col-sm-3">URL Adresa</dt>
          <dd class="col-sm-9">{ShowResult.url}</dd>

          <dt class="col-sm-3">Odeslaná data</dt>
          <dd class="col-sm-9">{JSON.stringify
          (ShowResult.data)}</dd>


        </dl>
      </Alert>
    );
  };

  return (
    <section>
      <Row className="text-center">
        <Col sm={12}>
          <h2 className="w-100">
            <strong>Přídat Joke </strong>
          </h2>
          {Loading === true ? (
            <div className="m-5 text-center">
              {' '}
              <div
                class="spinner-border text-primary mb-3"
                role="status"
              ></div>{' '}
              <p>Čekám na odpověd serveru :-) </p>
            </div>
          ) : (
            <div>
              <div>{ShowResult && alert()}</div>

              <Form
                className="mx-auto mt-5 w-50 mobile_fix"
                onSubmit={handleSubmit}
              >
                <Form.Group controlId="1">
                  <Form.Label>Váš email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="vas@email.cz"
                    onChange={handleChange}
                    required={true}
                  />
                </Form.Group>
                <Form.Group controlId="2">
                  <Form.Label>Kategorie</Form.Label>
                  <Form.Control
                    required={true}
                    as="select"
                    name="category"
                    onChange={handleChange}
                  >
                    <option>Geekovské</option>
                    <option>Černý humor</option>
                    <option>Slovní hříčka</option>
                    <option>Ostatní</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group name="vtip" onChange={handleChange} controlId="3">
                  <Form.Label>Vtip</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Vložte váš Joke o maximální velikosti 500 znaků"
                    maxlength="500"
                    minLength="10"
                    rows={3}
                    name="vtip"
                    required={true}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" disabled={Loading}>
                  Vložit vtip
                </Button>{' '}
              </Form>
            </div>
          )}
        </Col>{' '}
      </Row>
    </section>
  );
};

export default AddJoke;
