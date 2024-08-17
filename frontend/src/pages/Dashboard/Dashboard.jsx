import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Spinner, List, ListItem } from '@chakra-ui/react';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get('/api/analytics/statistics');
      setStats(res.data);
      setLoading(false);
    };
    fetchStats();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box padding="2rem">
      <Heading>Dashboard</Heading>
      <List spacing={3}>
        {stats.map((stat) => (
          <ListItem key={stat.name}>
            <Text fontWeight="bold">{stat.name}:</Text>
            <Text>Participants: {stat.participantCount}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;
