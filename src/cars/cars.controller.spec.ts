import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { Inject } from '@nestjs/common';
import { CarService } from './cars.service';

describe('Cars Controller', () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        CarService,
      ],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
