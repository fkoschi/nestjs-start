import { Controller, Get, Req, Post, HttpCode, Header, Param, Body, Put } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
    this.carService.create(createCarDto);
  }

  @Get()
  findAll(@Req() request: Request): Observable<any> {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns the car with id: ${id}`;
  }

}
