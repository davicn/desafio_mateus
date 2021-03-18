import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsuario1616099448607 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuarios",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },

          {
            name: "nome",
            type: "varchar"
          },
          {
            name: "idFilial",
            type: "int"
          },
        ],
        foreignKeys: [
          {
            name: "FKUsuario",
            referencedTableName: "filiais",
            referencedColumnNames: ["id"],
            columnNames: ["idFilial"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuarios")
  }

}
