import React from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FeedItem = styled.p`
  margin: 0.5rem 0;
`;

const ActivityFeed = ({ data }) => (
  <FeedContainer>
    <h3>Recent Activity</h3>
    {data.map((activity, index) => (
      <FeedItem key={index}>{activity}</FeedItem>
    ))}
  </FeedContainer>
);

export default ActivityFeed;
