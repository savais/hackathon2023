import { Injectable } from '@nestjs/common';
import { config } from "dotenv";

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
  getHello(): string {
    return 'Hello World!';
  }
}
