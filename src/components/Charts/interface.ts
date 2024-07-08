export interface DataPoint {
  date: string;
  numComments: number;
  numImpressions: number;
  numReactions: number;
  numShares: number;
  numViews: number;
  numVotes: number;
  postsCount: number;
}

export interface ChartProps {
  data: DataPoint[];
}
