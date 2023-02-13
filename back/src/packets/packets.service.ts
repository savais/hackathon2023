import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createReadStream, rmSync } from 'fs';
import { join } from 'path';
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
        const productType = await this.productTypeService.getProductTypeByName(createPacketDto.type);
        const packet: Partial<Packet> = {};

        packet.name = createPacketDto.name;
        packet.description = createPacketDto.description;
        packet.version = createPacketDto.version;
        packet.productType = productType;
        packet.path = createPacketDto.packet.filename;

        return await this.packetRepository.save(packet)
    }

    async removePacket(id: number): Promise<Packet> {
        const packet = await this.packetRepository.findOneOrFail({where: {id: id}});
        return await this.packetRepository.remove(packet);
    }

    async editPacket(id: number, dto: UpdatePacketDto, packet: Express.Multer.File, fileDir: string): Promise<Packet> {
        const oldPacket = await this.packetRepository.findOneOrFail({where: {id: id}});

        if(packet) {
            rmSync(join(fileDir, oldPacket.path));
            oldPacket.path = packet.filename;
        }

        if(dto.name) {
            oldPacket.name = dto.name;
        }

        if(dto.description) {
            oldPacket.description = dto.description;
        }

        if(dto.type) {
            oldPacket.productType = await this.productTypeService.getProductTypeByName(dto.type);
        }

        if(dto.version) {
            oldPacket.version = dto.version;
        }

        return await this.packetRepository.save(oldPacket);
    }

    async getPacketFile(id: number, fileDir: string): Promise<StreamableFile> {
        const packet = await this.packetRepository.findOneOrFail({where: {id: id}});
        const filepath = join(fileDir, packet.path);
        const file = createReadStream(filepath);
        return new StreamableFile(file);
    }
}
