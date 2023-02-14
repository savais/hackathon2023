import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
    
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'kuvaaja01', description: 'name of the user'})
    @Column()
    name: string;

    @ApiProperty({example: 'usermail@mail.fi', description: 'email of the user'})
    @Column()
    email: string;

    // TODO: Needs to be replaced with a salted hash
    @ApiProperty({example: 'salasana123', description: 'password of the user'})
    @Column()
    password: string;

    @ApiProperty({example: 'true', description: 'does the user have admin powers?'})
    @Column()
    roles: string;


    public get rolesAsList(): string[]{
        return String(this.roles).split(",")
    } 
        
}