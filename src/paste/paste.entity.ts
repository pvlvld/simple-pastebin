import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paste {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({
    type: 'text',
  })
  content: string;

  @Column({
    type: 'int',
    default: 0,
  })
  views: number;

  @Column({
    default: true,
  })
  isDeleted: boolean;
}
