import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsEmail, IsString, isStrongPassword, Length, ValidateNested } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: "mattimeikalainen"})
    @IsString()
    @Length(4, 64)
    username: string;

    @ApiProperty({example: "matinmeili@meili.fi"})
    @IsEmail()
    email: string;

    @ApiProperty({example: "salsasana123"})
    password: string;

    @ApiProperty({example: ["user"]})
    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    @ArrayMaxSize(2)
    roles: string[];
}