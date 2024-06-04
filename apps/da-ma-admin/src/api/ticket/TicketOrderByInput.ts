import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
