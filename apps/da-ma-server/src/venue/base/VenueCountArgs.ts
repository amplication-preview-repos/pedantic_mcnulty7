/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VenueWhereInput } from "./VenueWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class VenueCountArgs {
  @ApiProperty({
    required: false,
    type: () => VenueWhereInput,
  })
  @Field(() => VenueWhereInput, { nullable: true })
  @Type(() => VenueWhereInput)
  where?: VenueWhereInput;
}

export { VenueCountArgs as VenueCountArgs };