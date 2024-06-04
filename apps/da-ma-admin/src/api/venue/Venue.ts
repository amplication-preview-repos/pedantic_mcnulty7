import { Event } from "../event/Event";

export type Venue = {
  address: string | null;
  capacity: number | null;
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
