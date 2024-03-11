import React from 'react';
import MetricCard from './Metriccard.jsx';
import FlashOnIcon from '@mui/icons-material/FlashOn';
// MetricsContainer component representing the outer card containing metric cards
const MetricsContainer = () => {
  return (
    <div className="bg-beige p-6 rounded-3xl shadow-md flex w-4/5 items-center space-x-4" style={{ backgroundColor: '#E0C3A0' }}>
      <div className='flex flex-col items-left m-3 '>
        <h2 className="text-lg flex font-bold">Engagement</h2>
        <span className="text-md flex text-gray-600">General statistic of user engagement </span>
        <span className="text-md flex text-gray-600">processes.</span>
      </div>
      <div className="flex space-x-4">
        <MetricCard label="This Month" value="929" IconComponent="star" trend="up" />
        <MetricCard label="Last Month" value="233" IconComponent="arrowUp" />
      </div>
    </div>
  );
};

export default MetricsContainer;
