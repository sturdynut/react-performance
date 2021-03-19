import { useEffect, useState } from "react";
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

export const useRandomValue = (max) => {
  const [number, setNumber] = useState(() => getRandomNumber(max));

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(getRandomNumber(max));
    }, 1000);

    return () => clearInterval(interval);
  }, [max, setNumber]);

  return number;
};
