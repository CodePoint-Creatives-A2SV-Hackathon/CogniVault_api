import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;


  @CreateDateColumn()
  created_at: number;
}
