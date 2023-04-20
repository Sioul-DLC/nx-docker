import { RecordDto } from '@todocker2/shared/model';
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('records')
export class Record implements RecordDto {
  @Index()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 250 })
  label: string;

  @CreateDateColumn()
  createdDate?: Date;

  @Column({ default: false })
  done: boolean;
}
