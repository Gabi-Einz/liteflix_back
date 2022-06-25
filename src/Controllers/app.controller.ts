import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/Services/app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
