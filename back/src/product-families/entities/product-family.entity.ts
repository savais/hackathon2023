import { Entity } from "typeorm";
import { Packet } from "../../packets/entities/packet.entity";

@Entity()
export class ProductFamily {
    id: number;
    name: string;
    description: string;
    packets: Packet[]
}