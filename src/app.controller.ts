import { Controller, Get ,Header} from '@nestjs/common';
import { AppService } from './app.service';

// ana sayfadan gelen requestleri etiketler x.com/ controllere filter eklenebilir. x./productsd için  @Controller('products') aynı şekilde users da öyle
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type','text/html')
  getHello(): string {
    return this.appService.getHello();
  }
}
