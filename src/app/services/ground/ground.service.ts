import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants/constants.service';

@Injectable()
export class GroundService {

  ground : number[][];

  constructor (
    private _constantsService : ConstantsService
  ) {

  }

  getPiece (
    rowIndex : number,
    colIndex : number
  ) : number {
    return this.ground[rowIndex][colIndex];
  }

  initGround () : number[][] {
    let halfSize : number = Math.floor(this._constantsService.GROUND_SIZE / 2);

    this.ground = [];
    for (let i : number = 0; i < this._constantsService.GROUND_SIZE; i ++) {
      this.ground.push(new Array(this._constantsService.GROUND_SIZE).fill(this._constantsService.GROUND_NONE));
    }

    return this.ground;
  }
  initGroundBySnake (
    snake : number[][]
  ) : number [][] {
    for (let i : number = 0; i < snake.length; i ++) {
      this.ground[snake[i][0]][snake[i][1]] = this._constantsService.GROUND_SNAKE_BODY;
    }

    return this.ground;
  }

}
