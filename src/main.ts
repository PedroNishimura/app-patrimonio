import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe({//ValidationPipe é um método de segurança que trata os dados recebidos pela api
    whitelist: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    transform: true
  }))

  await app.listen(3000)
}
bootstrap();
