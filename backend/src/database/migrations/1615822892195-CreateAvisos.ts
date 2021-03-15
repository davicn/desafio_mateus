import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAvisos1615822892195 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "avisos",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name:"titulo",
            type:'varchar'
          },
          {
            name:"texto",
            type:'varchar'
          },
          {
            name:"urlImage",
            type:'varchar'
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("avisos");
  }

}
