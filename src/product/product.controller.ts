import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/search')
  async searchProducts(@Query('name') name: string) {
    // return name
    return await this.productService.searchProduct(name);
  }

  @Post('/create')
  async storeProduct(@Body() productData: ProductDto) {
    return await this.productService.createNewproduct(productData);
  }

  @Get('/:id')
  async searchProductByID(@Param('id') id: number): Promise<Product> {
    return await this.productService.getProductbyID(id);
  }

  @Put('/:id')
  async updateProduct(
    @Body() productData: ProductDto,
    @Param('id') id: number,
  ) {
    const res = await this.productService.updateProduct(id, productData);
    if (res)
      return {
        status: true,
        message: 'product updated succesfully',
        eror: null,
      };
    else return { status: false, massage: '', error: null };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: number) {
    const res = await this.productService.deleteProduct(id);
    if (res) {
      return {
        status: true,
        message: 'Product deleted successfully',
        error: null,
      };
    } else {
      return {
        status: false,
        message: 'Failed to delete product',
        error: 'Product not found or could not be deleted',
      };
    }
  }
  //   @Get('/')
  //   async getAllProducts(): Promise<Product[]> {
  //     return await this.productService.getAllProducts();
  //   }
}
