import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableClient1616944339782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase("ekaizen_desafio");
        await queryRunner.createTable(new Table({
            name: "clientes",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()' 
                },
                {
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'nome_fantasia',
                    type: 'varchar'
                },
                {
                    name: 'telefone',
                    type: 'varchar'
                },
                {
                    name: 'telefone_comercial',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'email_comercial',
                    type: 'varchar'
                },
                {
                    name: 'cnpj',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'cep',
                    type: 'varchar',
                    length: '8'
                },
                {
                    name: 'endereco',
                    type: 'varchar'
                },
                {
                    name: 'bairro',
                    type: 'varchar'
                },
                {
                    name: 'cidade',
                    type: 'varchar'
                },
                {
                    name: 'estado',
                    type: 'varchar',
                    length: '2'
                },
                {
                    name: 'quantidade_funcionarios',
                    type: 'integer'
                },
                {
                    name: 'porte',
                    type: 'varchar'
                    
                }
            ]
        }));
        await queryRunner.createTable(new Table({
            name: "ferramentas",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()' 
                },
                {
                    name: 'produto',
                    type: 'varchar',
                },
                {
                    name: 'pequeno_porte',
                    type: 'varchar',
                },
                {
                    name: 'medio_porte',
                    type: 'varchar',
                },
                {
                    name: 'grande_porte',
                    type: 'varchar',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ferramentas");
        await queryRunner.dropTable("clientes");
        await queryRunner.dropDatabase("ekaizen_desafio");
    }

}
