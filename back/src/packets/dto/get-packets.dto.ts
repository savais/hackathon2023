import { ProductFamily } from "../entities/product-family.entity";

export class GetPacketsDto {
    id: number;
    name: string;
    description: string;
    version: string;
    productFamily: ProductFamily; 
}