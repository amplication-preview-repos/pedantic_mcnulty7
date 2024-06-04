/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { EventCreateNestedManyWithoutVenuesInput } from "./EventCreateNestedManyWithoutVenuesInput";
import { Type } from "class-transformer";

@InputType()
class VenueCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutVenuesInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutVenuesInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutVenuesInput, {
    nullable: true,
  })
  events?: EventCreateNestedManyWithoutVenuesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { VenueCreateInput as VenueCreateInput };