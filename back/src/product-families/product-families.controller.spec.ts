import { Test, TestingModule } from '@nestjs/testing';
import { ProductFamilyController } from './product-families.controller';

describe('ProductFamilyController', () => {
  let controller: ProductFamilyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductFamilyController],
    }).compile();

    controller = module.get<ProductFamilyController>(ProductFamilyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
