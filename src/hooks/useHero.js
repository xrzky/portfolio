import { useState, useEffect } from "react";

const useHero = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    setTime(new Date());

    return () => clearInterval(timer);
  }, []);

  return time;
};

export default useHero;
