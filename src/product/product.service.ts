import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Like, Repository } from 'typeorm';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    // constructor code here if needed
  }

  async createNewproduct(productData: ProductDto) {
    const newProduct = this.productRepository.create(productData);
    const response = await this.productRepository.save(newProduct);
    if (response) return response;
    else
      throw new UnprocessableEntityException(
        'Something went wrong while creating the product',
      );
  }

  async getProductbyID(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    if (!product) {
      throw new UnprocessableEntityException(`product details not found`);
    }

    return product;
  }

  // async searchProductByName(name: string): Promise<Product[]> {
  //   const qname = `%${name}%`;
  //   const products = await this.productRepository.find({
  //     where: { name: Like(qname) },
  //   });
  //   console.log(qname);
  //   if (!products || products.length === 0) {
  //     throw new UnprocessableEntityException(`Product details not found`);
  //   }

  //   return products;
  // }

  async searchProduct(name: string): Promise<Product[]> {
    const products = await this.productRepository.find({
      where: {
        name: Like(`%${name}%`)
      },
    });

    if (!products || products.length === 0) {
      throw new UnprocessableEntityException(`Product details not found`);
    }

    return products;
  }

  async updateProduct(id: number, prodouctData: ProductDto) {
    const updateData = await this.productRepository.update(id, prodouctData);
    if (updateData) return true;
    else false;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      return false;
    }
    await this.productRepository.remove(product);
    return true;
  }
}
