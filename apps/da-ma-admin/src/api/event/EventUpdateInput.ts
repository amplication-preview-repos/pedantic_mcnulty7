import { BookingUpdateManyWithoutEventsInput } from "./BookingUpdateManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventUpdateInput = {
  bookings?: BookingUpdateManyWithoutEventsInput;
  datetime?: Date | null;
  description?: string | null;
  name?: string | null;
  venue?: VenueWhereUniqueInput | null;
};
