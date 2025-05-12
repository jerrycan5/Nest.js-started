import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initschema1746010122136 implements MigrationInterface {
  name = 'Initschema1746010122136';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`qty\` int NOT NULL DEFAULT '0', \`expire_date\` datetime NOT NULL, \`color\` varchar(255) NOT NULL, \`createdate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedate\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`products\``);
  }
}
