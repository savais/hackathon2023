import { Injectable } from '@nestjs/common';
import { CreatePacketDto } from './dto/create-packet.dto';
import { UpdatePacketDto } from './dto/update-packet.dto';
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

    async removePacket(id: number): Promise<Packet> {
        return null
    }

    async editPacket(id: number, dto: UpdatePacketDto): Promise<Packet> {
        return null
    }
}
