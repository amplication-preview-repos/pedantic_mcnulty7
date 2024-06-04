import { SortOrder } from "../../util/SortOrder";

export type VenueOrderByInput = {
  address?: SortOrder;
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
