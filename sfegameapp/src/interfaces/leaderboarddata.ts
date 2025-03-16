export interface leaderboardEntry {
  applicationUserId: string;
  minTimeConsumed: number;
  firstName: string;
  lastName: string;
}

export interface leaderboarddata {
  result: leaderboardEntry[];
}
