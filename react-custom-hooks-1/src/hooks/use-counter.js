import { useEffect, useState } from 'react';

const useCounter = (digit) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + digit);
    }, 1000);

    return () => clearInterval(interval);
  }, [digit]);

  return counter;
};

export default useCounter;
