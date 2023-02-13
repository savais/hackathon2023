import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger/dist';
import { CreatePacketDto } from './dto/create-packet.dto';
import { GetPacketsDto } from './dto/get-packets.dto';
import { UpdatePacketDto } from './dto/update-packet.dto';
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

    @Delete(":id")
    @ApiOperation({summary: "Remove packet with id"})
    @ApiOkResponse({type: Packet, description: "Removed succesfully"})
    async deletePacket(
        @Param("id") id: number
    ): Promise<Packet> {
        return await this.packetsService.removePacket(id);
    }

    @Patch(":id")
    async editPacket(
        @Param("id") id: number,
        @Body() dto: UpdatePacketDto
    ): Promise<Packet> {
        return await this.packetsService.editPacket(id, dto);
    }


    
}
