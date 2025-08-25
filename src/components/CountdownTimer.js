import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date(deadline);
      const diff = end - now;
      if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        setTimeLeft(`Offre valable jusqu'à minuit : ${hours}h ${minutes}m`);
      } else {
        setTimeLeft('Offre expirée !');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  return <p style={{ color: 'red', fontWeight: 'bold' }}>{timeLeft}</p>;
};

export default CountdownTimer;