import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box padding="2rem" marginLeft="512">
      <Heading>Welcome to Event Management System Portal</Heading>
      <Box marginTop="1rem" ml="4">
        <p>Find and manage your events here!</p>
      </Box>
    </Box>
  );
};

export default Home;
