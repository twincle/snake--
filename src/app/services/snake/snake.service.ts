import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants/constants.service';

@Injectable()
export class SnakeService {

  snake : number[][];

  constructor(
    private _constantsService : ConstantsService
  ) {

  }

  indexOfSnakeBody (
    rowIndex : number,
    colIndex : number
  ) : number {
    for (let i : number = 0; i < this.snake.length; i ++) {
      if (rowIndex === this.snake[i][0] && colIndex === this.snake[i][1]) {
        return i;
      }
    }
    return -1;
  }

  initSnake () : number[][] {
    let halfSize : number = Math.floor(this._constantsService.GROUND_SIZE / 2);

    this.snake = [];
    this.snake.push([halfSize, halfSize + 1]);
    this.snake.push([halfSize, halfSize]);
    this.snake.push([halfSize, halfSize - 1]);

    return this.snake;
  }

}
