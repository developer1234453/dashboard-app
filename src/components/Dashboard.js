import React from 'react';
import styled from 'styled-components';
import LineChart from './Widgets/LineChart';
import BarChart from './Widgets/BarChart';
import PieChart from './Widgets/PieChart';
import ActivityFeed from './Widgets/ActivityFeed';

// Mock data
const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'User Activity',
      data: [10, 20, 15, 30, 25, 35],
      fill: false,
      borderColor: '#42A5F5',
    },
  ],
};

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales Data',
      data: [100, 200, 150, 300, 250, 350],
      backgroundColor: '#66BB6A',
    },
  ],
};

const pieChartData = {
  labels: ['Category A', 'Category B', 'Category C'],
  datasets: [
    {
      data: [40, 30, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const activityFeedData = [
  'User JohnDoe logged in',
  'Order #1234 placed by JaneDoe',
  'Profile updated by Alice',
];

const MainContent = styled.main`
  margin-left: 250px;
  padding: 2rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Dashboard = () => (
  <MainContent>
    <LineChart data={lineChartData} />
    <BarChart data={barChartData} />
    <PieChart data={pieChartData} />
    <ActivityFeed data={activityFeedData} />
  </MainContent>
);

export default Dashboard;
