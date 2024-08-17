import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Button, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events');
        
        console.log(res.data);
        setEvents(res.data);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  return (
    <Box padding="2rem">
      <Heading>Event List</Heading>
      {events.length > 0 ? (
        events.map((event) => (
          <Box key={event._id} border="1px solid #ddd" padding="1rem" marginBottom="1rem">
            <Heading size="md">{event.name}</Heading>
            <Text>{event.date}</Text>
            <Link to={`/events/${event._id}`}>
              <Button>View Details</Button>
            </Link>
          </Box>
        ))
      ) : (
        <Text>No events available</Text>
      )}
    </Box>
  );
};

export default EventList;
