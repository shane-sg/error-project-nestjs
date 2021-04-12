import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn()
  user_id: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column()
  email: string;
}
