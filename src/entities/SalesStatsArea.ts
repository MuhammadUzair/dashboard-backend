import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';
import { Series } from './Series';
@Entity()
export class SalesStatsArea {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  xaxisCategories: string[];

  @Column(() => Series)
  series: Series[];
}
