import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const JokesList = (props) => {
  const [Jokes, setJokes] = useState('');

  const options = {
    method: 'GET',
    url: `https://jokeapi-v2.p.rapidapi.com/joke/${props.category}`,
    params: {
      format: 'json',
      blacklistFlags: 'nsfw,racist',
      idRange: '0-250',
      type: 'single',
      amount: 10,
    },
    headers: {
      'x-rapidapi-key': 'a8804ce244mshaed53de1c4cd761p19ee83jsnff69f3dc8df5',
      'x-rapidapi-host': 'jokeapi-v2.p.rapidapi.com',
    },
  };

  const favoriteJokes = { ...localStorage };

  console.log(test)

  const addFavoriteJoke = (id, data) => {
    localStorage.setItem(id, data);
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => {};
  }, [props.category]);

  return (
    <div>
      <Row>
        {Jokes.jokes &&
          Jokes.jokes.map((j) => {
            return (
              <Col sm={6} className="mb-5">
                {j.joke}
                <p
                  className="text-primary pt-3"
                  onClick={(e) => addFavoriteJoke("jokes", j.joke)}
                >
                  Přidat do oblíbených
                </p>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default JokesList;
