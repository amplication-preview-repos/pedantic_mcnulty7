import { EventUpdateManyWithoutVenuesInput } from "./EventUpdateManyWithoutVenuesInput";

export type VenueUpdateInput = {
  address?: string | null;
  capacity?: number | null;
  events?: EventUpdateManyWithoutVenuesInput;
  name?: string | null;
};
