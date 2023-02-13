import { Packet } from "./packet.entity";

export class ProductFamily {
    id: number;
    name: string;
    description: string;
    packets: Packet[]
}