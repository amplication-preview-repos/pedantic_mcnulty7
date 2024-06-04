import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type TicketUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  price?: number | null;
  typeField?: string | null;
};
