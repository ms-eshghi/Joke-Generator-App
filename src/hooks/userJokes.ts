import { useState } from 'react';
import type { IJoke } from '../types/Joke';

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([]);

  const saveJoke = (joke: IJoke): boolean => {
    if (!savedJokes.find(j => j.id === joke.id)) {
      setSavedJokes([...savedJokes, joke]);
      return true;
    }
    return false;
  };

  const deleteJoke = (id: number) => {
    setSavedJokes(savedJokes.filter(joke => joke.id !== id));
  };

  return {
    savedJokes,
    saveJoke,
    deleteJoke,
  };
};

export default useJokes;
