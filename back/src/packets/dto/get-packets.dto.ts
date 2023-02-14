import { ApiProperty } from "@nestjs/swagger";
import { ProductFamilyDto } from "../../product-families/dto/product-family.dto";

export class GetPacketsDto {

    @ApiProperty({example: 1})
    id: number;
    
    @ApiProperty({example: "Kemppari"})
    name: string;

    @ApiProperty({example: "Date: 20.1.2020"})
    description: string;

    @ApiProperty({example: "1.0.0"})
    version: string;

    @ApiProperty({type: ProductFamilyDto})
    productFamily: ProductFamilyDto; 
}