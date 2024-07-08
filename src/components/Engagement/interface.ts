export interface EngagementBarProps {
  date: string;
  numComments: number;
  numImpressions: number;
  numReactions: number;
  numShares: number;
  numViews: number;
  numVotes: number;
  postsCount: number;
}

export interface EngagementStatsProps {
  totals: {
    numShares: number;
    numComments: number;
    numReactions: number;
  };
}

export interface EngagementChartProps {
  data: EngagementBarProps[];
}

export interface EngagementDashboardProps {
  totals: any;
  data: EngagementChartProps['data'];
}
