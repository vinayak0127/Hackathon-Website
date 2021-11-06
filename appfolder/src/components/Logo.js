import React from 'react';
import { Box, Image } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        borderRadius="50%"
        objectFit="cover"
        src="https://www.logolynx.com/images/logolynx/f2/f26a5be6132e80e17f67d136063646ef.png"
        alr="logo"
      />
    </Box>
  );
}
