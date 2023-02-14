import { Injectable } from '@nestjs/common';
import { config } from "dotenv";
import { Packet } from './packets/entities/packet.entity';
import { PacketsService } from './packets/packets.service';
import { ProductFamily } from './product-families/entities/product-family.entity';
import { ProductFamilyService } from './product-families/product-families.service';
import { CreateProductTypeDto } from './product-type/dto/create-product-type.dto';
import { ProductType } from './product-type/entities/product-type.entity';
import { ProductTypeService } from './product-type/product-type.service';

type EnvKey = "JWT_SECRET" | "UPLOAD_DIR" | "PORT";

config();

export function getEnv(key: EnvKey) {
  const value = process.env[key];
  if(value === undefined) {
    throw new Error(`Key: ${key} not found in process.env`);
  }
  return value;
}

@Injectable()
export class AppService {

  constructor(
    private packetService: PacketsService,
    private productTypeService: ProductTypeService,
    private productFamilyService: ProductFamilyService
  ) {}


  getHello(): string {
    return 'Hello World!';
  }
}
