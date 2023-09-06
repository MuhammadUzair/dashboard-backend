import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { SalesStatsArea } from './SalesStatsArea';

@Entity()
export class Analytics {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column(() => SalesStatsArea)
  salesStatsArea: SalesStatsArea;
}
