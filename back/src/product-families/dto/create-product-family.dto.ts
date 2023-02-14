import { ApiProperty } from "@nestjs/swagger";


export class CreateProductFamilyDto {
    @ApiProperty({example: "Personal Protection Equipment"})
    name: string;

    @ApiProperty({example: "Suojaa itsesi suojausvälineillä"})
    description: string;
}