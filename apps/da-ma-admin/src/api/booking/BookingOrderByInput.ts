import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  ticketCount?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
