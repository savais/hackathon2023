import { ProductFamily } from "src/product-families/entities/product-family.entity";

export class CreatePacketDto {
    name: string;
    description: string;
    version: string;
    productFamily: ProductFamily;
    type: string;
    packet: Blob;
}