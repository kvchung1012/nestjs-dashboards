import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Public } from '../guards/public.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportCourseCommand } from 'src/application/usecases/import/commands/ImportCourseCommand';

@Controller('import')
export class ImportController {
  constructor(
    readonly commandBus: CommandBus,
    readonly queryBus: QueryBus,
  ) {}

  @Public()
  @Post('course')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async importDemo(@UploadedFile() file: Express.Multer.File) {
    return await this.commandBus.execute(new ImportCourseCommand(file.buffer));
  }
}
