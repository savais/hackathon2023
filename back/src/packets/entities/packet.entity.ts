import { ProductFamily } from "./product-family.entity";

export class Packet {
    id: number;
    name: string;
    description: string;
    version: string;
    productFamily: ProductFamily
    path: string;
    type: string;
}