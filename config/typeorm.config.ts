import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();
// const configService = new ConfigService()

const datasourceoptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'],
};

const AppDataSource = new DataSource(datasourceoptions);

export { datasourceoptions, AppDataSource };

// AppDataSource.initialize()
// .then(() => {
//     console.log('Data Source has been initialized!')
// })
// .catch((err) => {
//     console.error('DataSource Initialization Failed', err)
// });
