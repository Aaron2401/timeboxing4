import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  // Método para validar el login del usuario
  async validateUser(email: string, password: string): Promise<Omit<User, 'password'> | null> {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      // Elimina la contraseña del objeto antes de devolverlo
      const { password, ...result } = user;
      return result; // Aquí 'result' es de tipo Omit<User, 'password'>
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  // Método para registrar un nuevo usuario con contraseña cifrada
  async registerUser(email: string, password: string, name?: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || "", // Si `name` no es opcional en el esquema, provee un valor vacío
        start_time: new Date(),
        end_time: new Date(),
        status: 'active',
      },
    });
  }

  // Método para buscar un usuario por su email
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  // Método para obtener todos los usuarios
  async getAllUsers() {
    return prisma.user.findMany();
  }
}
