import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paste {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  content: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
