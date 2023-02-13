import { PartialType } from "@nestjs/mapped-types";
import { CreatePacketDto } from "./create-packe.dto";

export class UpdatePacketDto extends PartialType(CreatePacketDto) {}