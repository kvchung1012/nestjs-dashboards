import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}
