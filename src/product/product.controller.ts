import { Controller, Get, Query } from '@nestjs/common';
@Controller('product')
export class ProductController {
  @Get('/list')
  getproduct(
    @Query('id') id: number,
    @Query('category_id') categoary_id: number,
  ) {
    return 'product ID:' + id + 'and categoary ID:' + categoary_id;
  }

  @Get('/')
  getproductlists() {
    return {
      status: true,
      message: 'product data fetched successfully',
      date: null,
      error: null,
    };
  }
}
