import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service'; // Asegúrate de importar UserService

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService], // Agrega UserService aquí
})
export class AuthModule {}
