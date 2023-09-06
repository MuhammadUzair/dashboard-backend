import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Series {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  data: number[];
}
