import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
// Removed unused import

config();
const configservice = new ConfigService();

const options: DataSourceOptions = {
  type: 'postgres',
  port: parseInt(configservice.get('DB_PORT', '5432')),
  username: configservice.get('DB_USERNAME', 'default_user'),
  password: configservice.get('DB_PASSWORD', 'default_password'),
  host: configservice.get('DB_HOST', 'localhost'),
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
  
};

const AppDatasource = new DataSource(options);
export default AppDatasource;

AppDatasource.initialize()
  .then(() => {
    console.log('Data source has been initialized');
  })
  .catch((err) => {
    console.error('Datasource initialization failed', err);
  });

