import { ProductFamily } from "../../product-families/entities/product-family.entity";

export class Packet {
    id: number;
    name: string;
    description: string;
    version: string;
    productFamily: ProductFamily
    path: string;
    type: string;
}