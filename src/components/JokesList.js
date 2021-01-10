import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


const JokesList = (props) => {
  const [Jokes, setJokes] = useState('');
  const [Reload, setReload] = useState(false);
  const [Loading, setLoading] = useState(true);

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

  const favoriteJokes = Object.entries(localStorage);

  const addFavoriteJoke = (id, data) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(id, data);
      setReload(!Reload);
    }
  };

  const removeFavoriteJoke = (id, data) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(id, data);
      setReload(!Reload);
    }
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
      setLoading(false)
    return () => {};
  }, [props.category]);

  const ListOfJokes = () => {
    if (props.category === null) {
      return (
        <div>
          <p>
            <strong>Počet oblíbených vtipů: <span className="text-primary">{localStorage.length}</span>  </strong>
          </p>
          {favoriteJokes.map((j) => (
            <div className="m-5">
              <p>
              <i>   {j[1]}{' '}</i>
                <span
                  className="cursor-pointer remove text-danger"
                  onClick={(e) => removeFavoriteJoke(j[0], j[1])}
                >
                  <br></br>Odebrat z oblíbených
                </span>
              </p>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div>
        <Row>
          {Jokes.jokes &&
            Jokes.jokes.map((j) => {
              if (localStorage.getItem(j.id) === null) {
                return (
                  <Col sm={6} className="mb-5">
                   <i> {j.joke}</i>

                    <p
                      className="cursor-pointer text-primary pt-3"
                      onClick={(e) => addFavoriteJoke(j.id, j.joke)}
                    >
                      Přidat do oblíbených
                    </p>
                  </Col>
                );
              }

              return (
                <Col sm={6} className="mb-5">
                   <i>{j.joke}</i> 

                  <p
                    className="cursor-pointer remove text-danger pt-3"
                    onClick={(e) => removeFavoriteJoke(j.id, j.joke)}
                  >
                    Odebrat z oblíbených
                  </p>
                </Col>
              );
            })}
        </Row>
      </div>
    );
  };

  return Loading === true ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Nahravám...</span>
    </div>
  ) : (
    ListOfJokes()
  );
};

export default JokesList;
