import { Packet } from "../../packets/entities/packet.entity";

export class ProductFamily {
    id: number;
    name: string;
    description: string;
    packets: Packet[]
}