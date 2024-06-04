import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  ticketCount?: IntNullableFilter;
  tickets?: TicketListRelationFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
