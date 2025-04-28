import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductTable1745501387402 implements MigrationInterface {
  name = 'AddProductTable1745501387402';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "qty" integer NOT NULL DEFAULT '0', "expire_date" TIMESTAMP NOT NULL, "color" character varying NOT NULL, "createdate" TIMESTAMP NOT NULL DEFAULT now(), "updatedate" TIMESTAMP NOT NULL DEFAULT now(), "deletedate" TIMESTAMP, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
