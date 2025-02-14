import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';

import { ProfilesModule } from './modules/profiles/profiles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './modules/chats/chats.module';
import { MessageModule } from './modules/messages/messages.module';
import { ContextMiddleware } from '@utils/middleware/context.middleware';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: 'mongodb+srv://studenti:1234@nestjs-course.96eon.mongodb.net/',
      type: 'mongodb',
      database: 'giacomo-ruffoni-corso',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    ProfilesModule,
    ChatsModule,
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleware).forRoutes('*');
  }
}
