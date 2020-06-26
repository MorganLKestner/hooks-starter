import {useState, useEffect} from 'react';

function useTitleInput(initialValue) {
  // keeps track of state
  const [value, setValue ] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  })
  return [value, setValue]
}

export { useTitleInput };