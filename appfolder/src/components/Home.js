import { Image } from '@chakra-ui/image';
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/layout';
import '../Global.css';
import React from 'react';
import logo from '../img/codeCampwhite.png';
import '@fontsource/raleway/400.css';
import Confetti from 'react-confetti';
import '../app.css';

export const Home = () => {
  return (
    <Center
      ml="3%"
      maxW="95%"
      boxShadow="2xl"
      borderRadius="2xl"
      p={2}
      display={{ md: 'flex' }}
    >
      <Box flexShrink="0">
        <VStack p={10}>
          <Image src={logo} w={150} alt="CodeCamp" />
          <Heading fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
            Code Camp 3.0
          </Heading>
          <Text color="tomato">A Virtual Hackathon</Text>
        </VStack>
      </Box>
      <Center h={[null, null, 800]}>
        <Text
          fontWeight="bold"
          fontSize={{ base: '24px', md: '40px', lg: '46px' }}
          color="gray"
        >
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </Text>
      </Center>
    </Center>
  );
};
