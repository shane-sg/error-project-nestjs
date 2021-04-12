import { IsString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  // @ApiProperty({ description: 'The id of a user.' })
  @IsString()
  readonly user_id: string;

  // @ApiProperty({ description: 'The status of a user.' })
  @IsString()
  readonly status: string;

  @IsString()
  readonly first_name: string;

  @IsString()
  readonly email: string;
}
