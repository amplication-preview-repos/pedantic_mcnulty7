import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
