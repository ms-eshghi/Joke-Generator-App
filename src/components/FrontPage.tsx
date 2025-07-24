import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import type { IJoke } from '../types/Joke';

interface FrontPageProps {
  saveJoke?: (joke: IJoke) => boolean;
}

const FrontPage: React.FC<FrontPageProps> = ({ saveJoke }) => {
  const [joke, setJoke] = useState<IJoke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJoke = () => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://official-joke-api.appspot.com/random_joke', { signal })
      .then(res => res.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  };

  useEffect(() => {
    const abort = fetchJoke();
    return () => abort?.();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '10rem' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Joke Generator
      </Typography>

      {loading ? (
        <Typography>Loading a joke...</Typography>
      ) : joke ? (
        <Card
          style={{
            maxWidth: 600,
            margin: '1rem auto',
            backgroundColor: '#eee',
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold">
              {joke.setup}
            </Typography>
            <Typography>{joke.punchline}</Typography>
          </CardContent>
        </Card>
      ) : null}

      <Button variant="contained" color="primary" onClick={fetchJoke} style={{ marginRight: '1rem' }}>
        GET JOKE
      </Button>
      {joke && saveJoke && (
        <Button variant="contained" color="primary" onClick={() => saveJoke(joke)}>
          SAVE JOKE
        </Button>
      )}
    </div>
  );
};

export default FrontPage;
