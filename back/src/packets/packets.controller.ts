import { Controller, Get } from '@nestjs/common';
import { Packet } from './entities/packet.entity';
import { PacketsService } from './packets.service';

@Controller('packets')
export class PacketsController {

    constructor(private packetsService: PacketsService) {}

    @Get()
    async getPackets(): Promise<Packet[]> {
        return await this.packetsService.getPackets();
    }
}
