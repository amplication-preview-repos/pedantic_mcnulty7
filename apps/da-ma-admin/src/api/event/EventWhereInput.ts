import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventWhereInput = {
  bookings?: BookingListRelationFilter;
  datetime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  venue?: VenueWhereUniqueInput;
};
