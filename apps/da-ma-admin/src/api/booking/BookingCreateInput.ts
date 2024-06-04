import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketCreateNestedManyWithoutBookingsInput } from "./TicketCreateNestedManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  event?: EventWhereUniqueInput | null;
  ticketCount?: number | null;
  tickets?: TicketCreateNestedManyWithoutBookingsInput;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
