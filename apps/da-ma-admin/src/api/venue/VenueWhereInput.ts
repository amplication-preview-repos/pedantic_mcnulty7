import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type VenueWhereInput = {
  address?: StringNullableFilter;
  capacity?: IntNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
