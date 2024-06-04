import { Booking } from "../booking/Booking";

export type Ticket = {
  booking?: Booking | null;
  createdAt: Date;
  id: string;
  price: number | null;
  typeField: string | null;
  updatedAt: Date;
};
