import { Injectable } from '@nestjs/common';
import { CreatePacketDto } from './dto/create-packe.dto';
import { Packet } from './entities/packet.entity';

@Injectable()
export class PacketsService {

    async getPackets(): Promise<Packet[]> {
        return null;
    }

    async getPacket(id: number): Promise<Packet> {
        return null;
    }

    async postPacket(createPacketDto: CreatePacketDto): Promise<Packet> {
        return null;
    }
}
