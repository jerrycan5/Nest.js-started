// filepath: /Users/jerry/Desktop/ecommerce/src/product/product.dto.ts
import { IsString, IsInt, Length } from 'class-validator';

export class ProductDto {
  @IsString()
  @Length(5, 10)
  name: string;

  @IsInt()
  qty: number;

  @IsString()
  expire_date: string;

  @IsString()
  colour: string;

  @IsString()
  nafdac_no!: string;

  @IsString()
  size: string;

  @IsString()
  manufacture_date: string;
}