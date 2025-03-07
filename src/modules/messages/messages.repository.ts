import { Injectable } from '@nestjs/common';
import { DatabaseError } from '@utils/error/errors';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { BaseLogger } from '@utils/base-logger';
import { getTransactionId } from '@utils/context';

@Injectable()
export class MessagesRepository extends BaseLogger {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly dbConnection: MongoRepository<MessageEntity>,
  ) {
    super();
  }

  async create(
    chatId: string,
    createMessageDto: CreateMessageDto,
    senderId: string,
  ): Promise<MessageEntity | DatabaseError> {
    try {
      const messageToSave = new MessageEntity();
      messageToSave.text = createMessageDto.text;
      messageToSave.senderId = senderId;
      messageToSave.chatId = chatId;
      this.logger.debug('sto per salvare messaggio', {
        transactionId: getTransactionId(),
      });

      return await this.dbConnection.save(messageToSave);
    } catch (cause) {
      console.log(cause);
      return new DatabaseError('MariaDb non funziona / salvataggio profilo', {
        cause,
      });
    }
  }
}
