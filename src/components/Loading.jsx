import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { FaBitcoin } from 'react-icons/fa';

const Loading = () => {
  const [color, setColor] = useState('#1E1F23'); // Dark color
  const colors = ['#1E1F23', '#F06292', '#18FFFF', '#64DD17', '#C2185B', '#F9A825', '#1565C0'];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
    transform={"scale(1.2)"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      fontSize="34px"
      color={color}
      transition="color 0.2s ease-in-out"
      _hover={{ cursor: 'wait' }} // Change the cursor to wait on hover
    >
      <FaBitcoin className="spin" />
      <p>Loading...</p>
    </Box>
  );
};

export default Loading;
