/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TicketService } from "../ticket.service";
import { TicketCreateInput } from "./TicketCreateInput";
import { Ticket } from "./Ticket";
import { TicketFindManyArgs } from "./TicketFindManyArgs";
import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketUpdateInput } from "./TicketUpdateInput";

export class TicketControllerBase {
  constructor(protected readonly service: TicketService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ticket })
  async createTicket(@common.Body() data: TicketCreateInput): Promise<Ticket> {
    return await this.service.createTicket({
      data: {
        ...data,

        booking: data.booking
          ? {
              connect: data.booking,
            }
          : undefined,
      },
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        price: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Ticket] })
  @ApiNestedQuery(TicketFindManyArgs)
  async tickets(@common.Req() request: Request): Promise<Ticket[]> {
    const args = plainToClass(TicketFindManyArgs, request.query);
    return this.service.tickets({
      ...args,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        price: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ticket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ticket(
    @common.Param() params: TicketWhereUniqueInput
  ): Promise<Ticket | null> {
    const result = await this.service.ticket({
      where: params,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        price: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Ticket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTicket(
    @common.Param() params: TicketWhereUniqueInput,
    @common.Body() data: TicketUpdateInput
  ): Promise<Ticket | null> {
    try {
      return await this.service.updateTicket({
        where: params,
        data: {
          ...data,

          booking: data.booking
            ? {
                connect: data.booking,
              }
            : undefined,
        },
        select: {
          booking: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          price: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Ticket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTicket(
    @common.Param() params: TicketWhereUniqueInput
  ): Promise<Ticket | null> {
    try {
      return await this.service.deleteTicket({
        where: params,
        select: {
          booking: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          price: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
