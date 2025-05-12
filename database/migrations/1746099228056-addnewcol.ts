import { MigrationInterface, QueryRunner } from "typeorm";

export class Addnewcol1746099228056 implements MigrationInterface {
    name = 'Addnewcol1746099228056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`qty\` int NOT NULL DEFAULT '0', \`expire_date\` datetime NOT NULL, \`colour\` varchar(255) NOT NULL, \`size\` varchar(255) NOT NULL, \`nafdac_number\` varchar(255) NULL, \`manufacture_date\` datetime NOT NULL, \`expiry_date\` datetime NOT NULL, \`model\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
