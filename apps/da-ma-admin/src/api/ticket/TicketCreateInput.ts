import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type TicketCreateInput = {
  booking?: BookingWhereUniqueInput | null;
  price?: number | null;
  typeField?: string | null;
};
