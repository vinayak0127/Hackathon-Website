import { Image } from '@chakra-ui/image';
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/layout';
import '../Global.css';
import React from 'react';
import logo from '../img/codeCampwhite.png';
import '@fontsource/raleway/400.css';

function RightDesc({ title, desc, ...rest }) {
  return (
    <Center boxSize="xl" flex="1" {...rest}>
      <Text fontSize={45} fontFamily="raleway">
        {desc}
      </Text>
    </Center>
  );
}
export const Home = () => {
  return (
    <Box ml="3%" maxW="95%" boxShadow="2xl" borderRadius="2xl" p={2}>
      <HStack spacing="5%">
        <VStack p={10}>
          <Image src={logo} w={150} alt="CodeCamp" />
          <Heading>Code Camp 3.0</Heading>
          <Text color="tomato">A Virtual Hackathon</Text>
        </VStack>

        <RightDesc
          title="Indian Society For Technical Education"
          desc="Welcome to Hackathon Eiusmod nisi deserunt enim non fugiat sint officia veniam sunt deserunt non dolore adipisicing deserunt."
        />
      </HStack>
    </Box>
  );
};
