import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTypeModule } from 'src/product-type/product-type.module';
import { Packet } from './entities/packet.entity';
import { PacketsController } from './packets.controller';
import { PacketsService } from './packets.service';

@Module({
  imports:[TypeOrmModule.forFeature([Packet]), ProductTypeModule, ],
  controllers: [PacketsController],
  providers: [PacketsService],
})
export class PacketsModule {}
