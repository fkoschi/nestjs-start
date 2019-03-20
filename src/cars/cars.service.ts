import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Car } from './interface/create-car.interface';

@Injectable()
export class CarService {
  private readonly cars: Car[] = [];

  create(car: Car) {
    this.cars.push(car);
    console.log(this.cars);
  }

  findAll(): Observable<Car[]> {
    return of(this.cars);
  }
}
