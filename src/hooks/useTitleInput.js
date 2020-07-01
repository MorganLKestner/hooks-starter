import { useState, useEffect, useDebugValue } from 'react';

function useTitleInput(initialValue) {
  // keeps track of state
  const [value, setValue ] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  })
  useDebugValue(value)
  // important for library authors
  return [value, setValue]
}

export { useTitleInput };