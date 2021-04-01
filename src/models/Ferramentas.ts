import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ferramentas')
class Ferramentas{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  produto: string;

  @Column('integer')
  pequeno_porte: number;

  @Column('integer')
  medio_porte: number;

  @Column('integer')
  grande_porte: number;
}

export {Ferramentas};