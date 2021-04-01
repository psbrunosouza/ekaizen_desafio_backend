import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
class Clientes{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  nome_fantasia: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column()
  email_comercial: string;

  @Column()
  telefone: string;

  @Column()
  telefone_comercial: string;

  @Column() 
  cep: string;

  @Column() 
  endereco: string;

  @Column() 
  bairro: string;

  @Column() 
  cidade: string;

  @Column() 
  estado: string;

  @Column('integer') 
  quantidade_funcionarios: number;

  @Column()
  porte: 'pequeno porte' | 'medio porte' | 'grande porte';
  
}

export {Clientes};