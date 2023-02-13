import { Body, Controller, Get, Param, Post, Delete, Patch, UseInterceptors, StreamableFile } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger/dist';
import { diskStorage } from 'multer';
import { CreatePacketDto } from './dto/create-packet.dto';
import { GetPacketsDto } from './dto/get-packets.dto';
import { UpdatePacketDto } from './dto/update-packet.dto';
import { Packet } from './entities/packet.entity';
import { PacketsService } from './packets.service';

const UPLOAD_DIR = "./uploads";

@Controller('packets')
export class PacketsController
{

    constructor(private packetsService: PacketsService) { }

    @Get()
    @ApiOperation({ summary: "Get all packets" })
    @ApiOkResponse({ type: GetPacketsDto, isArray: true })
    async getPackets(): Promise<Packet[]>
    {
        return await this.packetsService.getPackets();
    }

    @Get(":id")
    @ApiOperation({ summary: "Get single packet" })
    @ApiOkResponse({ type: GetPacketsDto })
    @ApiNotFoundResponse({ description: "Packet with id not found" })
    async getPacket(
        @Param("id") id: number
    ): Promise<Packet>
    {
        return await this.packetsService.getPacket(id);
    }

    @Post()
    @ApiOperation({ summary: "Add new packet" })
    @ApiCreatedResponse({ type: Packet })
    @UseInterceptors(FileInterceptor("packet", {
        storage: diskStorage({
            destination: UPLOAD_DIR
        })
    }))
    async postPacket(
        @Body() createPacketDto: CreatePacketDto,
        @UploadedFile() packet: Express.Multer.File
    ): Promise<Packet>
    {
        createPacketDto.packet = packet;
        console.log(packet)
        return await this.packetsService.postPacket(createPacketDto);
    }

    @Delete(":id")
    @ApiOperation({ summary: "Remove packet with id" })
    @ApiOkResponse({ type: Packet, description: "Removed succesfully" })
    async deletePacket(
        @Param("id") id: number
    ): Promise<Packet>
    {
        return await this.packetsService.removePacket(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Edit packet with id" })
    @ApiOkResponse({ description: "Packet edit succesfull", type: Packet })
    async editPacket(
        @Param("id") id: number,
        @Body() dto: UpdatePacketDto
    ): Promise<Packet>
    {
        return await this.packetsService.editPacket(id, dto);
    }

    @Get(":id/file")
    @ApiOperation({summary: "Get packet file with id"})
    @ApiOkResponse({description: "Found image succesfully", type: StreamableFile})
    async getFile(@Param("id") id: number): Promise<StreamableFile>
    {
        return await this.packetsService.getPacketFile(id, UPLOAD_DIR);
    }



}
