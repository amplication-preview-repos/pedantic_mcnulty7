import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
