import { Injectable } from '@nestjs/common';
import { DatabaseError } from '@utils/error/errors';

import { MessagesRepository } from './messages.repository';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageEntity } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}
  async create(
    chatId: string,
    createMessageDto: CreateMessageDto,
    senderId: string,
  ): Promise<MessageEntity | DatabaseError> {
    return await this.messagesRepository.create(
      chatId,
      createMessageDto,
      senderId,
    );
  }
}
