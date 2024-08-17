import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="teal.500"
      color="white"
      padding="1rem"
      textAlign="center"
      position="relative"
      bottom="0"
      width="100%"
      ml="220"
    >
      <Text fontSize="md" mb="0.5rem">
        &copy; 2024 Event Manager. All rights reserved.
      </Text>
      <Text fontSize="sm" fontStyle="italic">
        Designed and developed by Pratik Raj
      </Text>
    </Box>
  );
};

export default Footer;
