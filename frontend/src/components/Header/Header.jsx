import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      bg="teal.500"
      color="white"
      padding="1rem"
      flexDirection="column"
    >
      <Heading size="8xl" mb="1rem" textAlign="center" marginLeft="32rem">
        Event Management System
      </Heading>
      <Flex justify="center" padding="1rem">
        <Link to="/events">
          <Button marginRight="1rem" marginLeft="32rem">
            Events
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button marginRight="1rem">Dashboard</Button>
        </Link>
        <Link to="/login">
          <Button marginRight="1rem">Login</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
