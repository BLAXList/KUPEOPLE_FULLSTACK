import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import Admin from './entities/admin.entity';
import Chat_message from './entities/chat_message.entity';
import Chatroom from './entities/chatroom.entity';
import Commentation from './threads/comentation.entity';
import Reportment_comment from './entities/reportment_comment.entity';
import Reportment_thread from './entities/reportment_thread.entity';
import Thread from './threads/thread.entity';
import User from './entities/user.entity';

import { ThreadsModule } from './threads/threads.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test_kuPeople',
      entities: [Admin, Chat_message, Chatroom, Commentation,
          Reportment_comment, Reportment_thread, Thread, User],
      synchronize: true,
    }),
    ThreadsModule,
    AuthModule,
    UsersModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
