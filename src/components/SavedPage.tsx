import React from 'react';
import { Card, CardContent, Typography, Button, Grid} from '@mui/material';
import type { IJoke } from '../types/Joke';



interface SavedPageProps {
  savedJokes: IJoke[];
  deleteJoke: (id: number) => void;
}

const SavedPage: React.FC<SavedPageProps> = ({ savedJokes, deleteJoke }) => {
  return (
    <div style={{ padding: '10rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Saved Jokes
      </Typography>

      {savedJokes.length === 0 ? (
        <Typography align="center">No saved jokes yet.</Typography>
      ) : (
        <Grid container spacing={2} justifyContent="center">
  {savedJokes.map(joke => (
    <Grid columns={12} key={joke.id} sx={{ flexBasis: { xs: '100%', sm: '100%', md: '33.33%' } }}>

              <Card style={{  width: '100%', maxWidth: 400,backgroundColor: '#eee' }}>
                <CardContent>
                  <Typography fontWeight="bold">{joke.setup}</Typography>
                  <Typography>{joke.punchline}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => deleteJoke(joke.id)}
                    style={{ marginTop: '1rem' }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SavedPage;
