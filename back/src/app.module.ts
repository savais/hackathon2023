import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacketsModule } from './packets/packets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PacketsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
