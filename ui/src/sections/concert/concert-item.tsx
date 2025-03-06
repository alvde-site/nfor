import type { Dayjs } from 'dayjs';

export type ConcertItemProps = {
  id: number;
  title: string;
  coverUrl: string;
  // totalViews: number;
  description: string;
  // totalShares: number;
  // totalComments: number;
  // totalFavorites: number;
  concertDate: Dayjs[];
  // author: {
  //   name: string;
  //   avatarUrl: string;
  // };
};
