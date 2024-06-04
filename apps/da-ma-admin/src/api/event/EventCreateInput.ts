import { BookingCreateNestedManyWithoutEventsInput } from "./BookingCreateNestedManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventCreateInput = {
  bookings?: BookingCreateNestedManyWithoutEventsInput;
  datetime?: Date | null;
  description?: string | null;
  name?: string | null;
  venue?: VenueWhereUniqueInput | null;
};
