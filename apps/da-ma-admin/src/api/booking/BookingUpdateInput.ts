import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketUpdateManyWithoutBookingsInput } from "./TicketUpdateManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  event?: EventWhereUniqueInput | null;
  ticketCount?: number | null;
  tickets?: TicketUpdateManyWithoutBookingsInput;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
