import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger/dist';
import { CreatePacketDto } from './dto/create-packe.dto';
import { GetPacketsDto } from './dto/get-packets.dto';
import { Packet } from './entities/packet.entity';
import { PacketsService } from './packets.service';

@Controller('packets')
export class PacketsController {

    constructor(private packetsService: PacketsService) {}

    @Get()
    @ApiOperation({summary: "Get all packets"})
    @ApiOkResponse({type: GetPacketsDto, isArray: true})
    async getPackets(): Promise<Packet[]> {
        return await this.packetsService.getPackets();
    }

    @Get(":id")
    @ApiOperation({summary: "Get single packet"})
    @ApiOkResponse({type: GetPacketsDto})
    @ApiNotFoundResponse({description: "Packet with id not found"})
    async getPacket(
        @Param("id") id: number
    ): Promise<Packet> {
        return await this.packetsService.getPacket(id);
    }

    @Post()
    @ApiOperation({summary: "Add new packet"})
    @ApiCreatedResponse({type: Packet})
    async postPacket(
        @Body() createPacketDto: CreatePacketDto
    ): Promise<Packet> {
        return await this.packetsService.postPacket(createPacketDto);
    }
    
}
