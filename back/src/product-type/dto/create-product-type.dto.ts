import { ApiProperty } from "@nestjs/swagger";

export class CreateProductTypeDto {
    @ApiProperty({example: "X5 Hitsausmasiinat"})
    name: string;
    @ApiProperty({example: "X5 tuoteperheen hitsarit"})
    description: string;
    @ApiProperty({example: "Hitsausmasiinat", description: "Tuoteperheen nimi"})
    productFamily: string;
}