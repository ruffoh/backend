import { ArrayMinSize, IsArray, IsString } from 'class-validator';

// data transfer object
export class CreateChatDto {
  @IsString()
  name: string;
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  participantsId: string[];
}
