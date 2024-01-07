import { Body, Controller, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBody } from '@nestjs/swagger';
import { GetTokenQuery } from 'src/application/usecases/auth/queries/GetTokenQuery';
import { LoginDto } from '../dtos/auth/LoginDto';
import { Public } from '../guards/public.guard';

@Controller('dashboard')
export class DashboardController {
  constructor(readonly queryBus: QueryBus) {}

  @Public()
  @Post('login')
  @ApiBody({ type: LoginDto })
  async login(@Body() loginDto: LoginDto) {
    const result = await this.queryBus.execute(
      new GetTokenQuery(loginDto.userName, loginDto.password),
    );
    return result;
  }
}
