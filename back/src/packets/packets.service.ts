import { Injectable } from '@nestjs/common';
import { Packet } from './entities/packet.entity';

@Injectable()
export class PacketsService {

    async getPackets(): Promise<Packet[]> {
        return null;
    }
}
