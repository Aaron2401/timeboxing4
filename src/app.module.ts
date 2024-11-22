import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module'; // Asegúrate de importar el módulo de autenticación

@Module({
  imports: [PrismaModule, UserModule, AuthModule], // Agrega AuthModule aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
