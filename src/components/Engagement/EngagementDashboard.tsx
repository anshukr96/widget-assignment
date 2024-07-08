import React from 'react';
import Chart from '../Charts/Charts';
import './EngagementDashboard.css';
import {
  EngagementChartProps,
  EngagementDashboardProps,
  EngagementStatsProps,
} from './interface';

const EngagementChart: React.FC<EngagementChartProps> = ({ data }) => (
  <Chart data={data} />
);

const EngagementStats: React.FC<EngagementStatsProps> = ({ totals }) => (
  <div className="engagement-stats">
    <div className="stat-item">
      <span className="stat-value">{totals.numShares.toLocaleString()}</span>
      <span className="stat-label">REPOSTS</span>
    </div>
    <div className="stat-item">
      <span className="stat-value">{totals.numComments.toLocaleString()}</span>
      <span className="stat-label">COMMENTS</span>
    </div>
    <div className="stat-item">
      <span className="stat-value">{totals.numReactions.toLocaleString()}</span>
      <span className="stat-label">REACTIONS</span>
    </div>
  </div>
);

interface EngagementHeaderProps {
  title: string;
}

const EngagementHeader: React.FC<EngagementHeaderProps> = ({ title }) => (
  <h2 className="engagement-header">{title}</h2>
);

const EngagementDashboard: React.FC<EngagementDashboardProps> = ({
  totals,
  data,
}) => {
  return (
    <div className="engagement-dashboard">
      <EngagementHeader title="Engagements • Last 30 days" />
      <EngagementStats totals={totals} />
      <EngagementChart data={data} />
    </div>
  );
};

export default EngagementDashboard;
