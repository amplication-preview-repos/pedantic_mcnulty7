import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";
import { User } from "../user/User";

export type Booking = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  ticketCount: number | null;
  tickets?: Array<Ticket>;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
