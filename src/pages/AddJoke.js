import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AddJoke = () => {
  const [Values, setValues] = useState({
    email: '',
    category: '',
    joke: '',
  });

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
        console.log(response.status);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  return Loading === true ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Nahravám...</span>
    </div>
  ) : (
    <div>
      <Form onSubmit={handleSubmit}>
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
  );
};

export default AddJoke;
