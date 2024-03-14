 
import React, { useState, useEffect } from 'react';
import {  useNavigate , useLocation, } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 
import './home.css';

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
     
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
       
      navigate('/login');
      return;
    }

     
    fetchJokes();
  }, [navigate]);

  const fetchJokes = () => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        setJokes(jsonData.jokes)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  
  // const isLoggedIn = localStorage.getItem('isLoggedIn');
  // if (!isLoggedIn) {
  //   navigate('/login');
  //   return;
  // }

  // useEffect(() => {
  //   fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((jsonData) => {
  //       // console.log(jsonData.jokes) 
  //       setJokes(jsonData.jokes)
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, [])
    


  if (loading) {
    return (
      <div className='spinner-container'>
        <Spinner animation="border" role="status" >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>

    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <h1 className='heading'>Random Jokes</h1>
      <Row xs={1} lg={2} className="g-4">
        {jokes.map((jokeObj) => (
          <Col key={jokeObj.id} className="mb-3">
             
            <Card className='card-container'>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{jokeObj.joke}</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">{jokeObj.category}</cite></footer>
                </blockquote>
              </Card.Body>
            </Card>
             
             
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Homepage