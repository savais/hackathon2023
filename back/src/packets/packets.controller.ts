import { Body, Controller, Get, Param, Post, Delete, Patch, UseInterceptors, StreamableFile } from '@nestjs/common';
import { UploadedFile, UseGuards } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger/dist';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { getEnv } from 'src/main';
import { CreatePacketDto } from './dto/create-packet.dto';
import { GetPacketsDto } from './dto/get-packets.dto';
import { UpdatePacketDto } from './dto/update-packet.dto';
import { Packet } from './entities/packet.entity';
import { PacketsService } from './packets.service';

const UPLOAD_DIR = getEnv("UPLOAD_DIR");

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
    @UseGuards(JwtAuthGuard)
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
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "Remove packet with id" })
    @ApiOkResponse({ type: Packet, description: "Removed succesfully" })
    @ApiNotFoundResponse({description: "Packet not found for used id"})
    async deletePacket(
        @Param("id") id: number
    ): Promise<Packet>
    {
        return await this.packetsService.removePacket(id);
    }

    @Patch(":id")
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "Edit packet with id" })
    @ApiOkResponse({ description: "Packet edit succesfull", type: Packet })
    @ApiNotFoundResponse({description: "Packet not found for used id"})
    @UseInterceptors(FileInterceptor("packet", {
        storage: diskStorage({
            destination: UPLOAD_DIR
        })
    }))
    async editPacket(
        @Param("id") id: number,
        @Body() dto: UpdatePacketDto,
        @UploadedFile() packet: Express.Multer.File
    ): Promise<Packet>
    {
        return await this.packetsService.editPacket(id, dto, packet, UPLOAD_DIR);
    }

    @Get(":id/file")
    @ApiOperation({summary: "Get packet file with id"})
    @ApiOkResponse({description: "Found image succesfully", type: StreamableFile})
    @ApiNotFoundResponse({description: "Packet not found for used id"})
    async getFile(@Param("id") id: number): Promise<StreamableFile>
    {
        return await this.packetsService.getPacketFile(id, UPLOAD_DIR);
    }



}
