import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  datetime?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  venueId?: SortOrder;
};
