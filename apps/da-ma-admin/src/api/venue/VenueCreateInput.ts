import { EventCreateNestedManyWithoutVenuesInput } from "./EventCreateNestedManyWithoutVenuesInput";

export type VenueCreateInput = {
  address?: string | null;
  capacity?: number | null;
  events?: EventCreateNestedManyWithoutVenuesInput;
  name?: string | null;
};
