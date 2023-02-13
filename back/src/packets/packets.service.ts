import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductTypeService } from 'src/product-type/product-type.service';
import { Repository } from 'typeorm';
import { CreatePacketDto } from './dto/create-packet.dto';
import { UpdatePacketDto } from './dto/update-packet.dto';
import { Packet } from './entities/packet.entity';

@Injectable()
export class PacketsService {

    constructor(
        @InjectRepository(Packet) private packetRepository: Repository<Packet>,
        private productTypeService: ProductTypeService
    ) {}

    async getPackets(): Promise<Packet[]> {
        return this.packetRepository.find();
    }

    async getPacket(id: number): Promise<Packet> {
        return this.packetRepository.findOneOrFail({where: {id: id}});
    }

    async postPacket(createPacketDto: CreatePacketDto): Promise<Packet> {
        //this.productTypeService.getWithName();
        this.packetRepository.save(createPacketDto)
        return null;
    }

    async removePacket(id: number): Promise<Packet> {
        return null
    }

    async editPacket(id: number, dto: UpdatePacketDto): Promise<Packet> {
        return null
    }
}
