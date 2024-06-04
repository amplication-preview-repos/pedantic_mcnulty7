import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "typeField";

export const TicketTitle = (record: TTicket): string => {
  return record.typeField?.toString() || String(record.id);
};