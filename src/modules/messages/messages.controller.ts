import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetProfileId } from '../auth/profile.decorator';
import { MessagesService } from './messages.service';
import { BaseLogger } from '@utils/base-logger';

@Controller('chats/:chatId/messages')
export class MessagesController extends BaseLogger {
  constructor(private readonly messagesService: MessagesService) {
    super();
  }

  @Post()
  create(
    @Param('chatId') chatId: string,
    @Body() createMessageDto: CreateMessageDto,
    @GetProfileId() profileId: string,
  ) {
    //

    this.messagesService.create(chatId, createMessageDto, profileId);
    this.logger.debug('Un utente sta creando un messaggio', {
      chatId,
      //  createMessageDto, per privacy non si mette
      profileId,
    });
    return this.messagesService.create(chatId, createMessageDto, profileId);
  }
}
