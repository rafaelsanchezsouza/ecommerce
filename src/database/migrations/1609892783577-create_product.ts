import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProduct1609892783577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'categoria',
            type: 'varchar',
          },
          {
            name: 'medida',
            type: 'varchar',
          },
          {
            name: 'preco_final',
            type: 'integer',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
