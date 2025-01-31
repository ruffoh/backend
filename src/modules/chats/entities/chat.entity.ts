import { ObjectId } from 'mongodb';
import { BeforeInsert, Column, Entity, ObjectIdColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('')
export class ChatEntity {
  @ObjectIdColumn()
  private _id: ObjectId;

  @Column({ unique: true })
  id: string;

  @Column()
  name: string;

  @Column()
  participantsId: string[];

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  bio: string;

  @BeforeInsert()
  private generateId() {
    this.id = v4();
  }
}
