import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketWhereInput = {
  booking?: BookingWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  typeField?: StringNullableFilter;
};
