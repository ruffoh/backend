import { Injectable } from '@nestjs/common';
import { ChatEntity } from './entities/chat.entity';
import { DatabaseError } from '@utils/error/errors';
import { CreateChatDto } from './dto/create-chat.dto';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChatsRepository {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly dbConnection: MongoRepository<ChatEntity>,
  ) {}

  async create(
    createChatDto: CreateChatDto,
  ): Promise<ChatEntity | DatabaseError> {
    try {
      const chatToSave = new ChatEntity();
      chatToSave.name = createChatDto.name;
      chatToSave.participantsId = createChatDto.participantsId;
      return await this.dbConnection.save(chatToSave);
    } catch (cause) {
      console.log(cause);
      return new DatabaseError('MariaDb non funziona / salvataggio profilo', {
        cause,
      });
    }
  }
}
