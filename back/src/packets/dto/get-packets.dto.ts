import { ProductFamily } from "../../product-families/dto/product-family.dto";

export class GetPacketsDto {
    id: number;
    name: string;
    description: string;
    version: string;
    productFamily: ProductFamily; 
}