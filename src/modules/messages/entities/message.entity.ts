import { ObjectId } from 'mongodb';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity('messages')
export class MessageEntity {
  @ObjectIdColumn()
  private _id: ObjectId;

  @Column({ unique: true })
  id: string;

  @Column()
  text: string;

  @Column()
  senderId: string;

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  chatId: string;

  @BeforeInsert()
  private generateId() {
    this.id = v4();
  }
}
