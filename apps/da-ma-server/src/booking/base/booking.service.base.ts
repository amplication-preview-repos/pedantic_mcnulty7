/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Booking as PrismaBooking,
  Ticket as PrismaTicket,
  Event as PrismaEvent,
  User as PrismaUser,
} from "@prisma/client";

export class BookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BookingCountArgs, "select">): Promise<number> {
    return this.prisma.booking.count(args);
  }

  async bookings<T extends Prisma.BookingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingFindManyArgs>
  ): Promise<PrismaBooking[]> {
    return this.prisma.booking.findMany<Prisma.BookingFindManyArgs>(args);
  }
  async booking<T extends Prisma.BookingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingFindUniqueArgs>
  ): Promise<PrismaBooking | null> {
    return this.prisma.booking.findUnique(args);
  }
  async createBooking<T extends Prisma.BookingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingCreateArgs>
  ): Promise<PrismaBooking> {
    return this.prisma.booking.create<T>(args);
  }
  async updateBooking<T extends Prisma.BookingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingUpdateArgs>
  ): Promise<PrismaBooking> {
    return this.prisma.booking.update<T>(args);
  }
  async deleteBooking<T extends Prisma.BookingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingDeleteArgs>
  ): Promise<PrismaBooking> {
    return this.prisma.booking.delete(args);
  }

  async findTickets(
    parentId: string,
    args: Prisma.TicketFindManyArgs
  ): Promise<PrismaTicket[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tickets(args);
  }

  async getEvent(parentId: string): Promise<PrismaEvent | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
