import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packet } from './entities/packet.entity';
import { PacketsController } from './packets.controller';
import { PacketsService } from './packets.service';

@Module({
  controllers: [PacketsController],
  providers: [PacketsService],
  imports: [TypeOrmModule.forFeature([Packet])]
})
export class PacketsModule {}
