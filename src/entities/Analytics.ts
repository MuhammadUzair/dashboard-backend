import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Analytics {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;
}
