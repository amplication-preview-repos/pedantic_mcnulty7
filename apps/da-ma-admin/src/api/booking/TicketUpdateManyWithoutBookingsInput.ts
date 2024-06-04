import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type TicketUpdateManyWithoutBookingsInput = {
  connect?: Array<TicketWhereUniqueInput>;
  disconnect?: Array<TicketWhereUniqueInput>;
  set?: Array<TicketWhereUniqueInput>;
};
