import { Booking } from "../booking/Booking";
import { Venue } from "../venue/Venue";

export type Event = {
  bookings?: Array<Booking>;
  createdAt: Date;
  datetime: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  venue?: Venue | null;
};
