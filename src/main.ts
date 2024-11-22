import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService } from './user/user.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const userService = app.get(UserService);
    
    // Elimina todos los usuarios
    try {
        await prisma.user.deleteMany({});
        console.log('Todos los usuarios han sido eliminados.');
    } catch (error) {
        console.error('Error al eliminar los usuarios:', error);
    }

    // Crea un usuario nuevo
    try {
        const newUser = await userService.registerUser('ejemplo@correo.com', 'contraseñaSegura', 'Nombre del Usuario');
        console.log('Usuario creado:', newUser);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
    }

    await app.listen(3000);
}

bootstrap();
