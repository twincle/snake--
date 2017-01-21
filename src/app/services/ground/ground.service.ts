import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants/constants.service';
import { RuntimeService } from '../runtime/runtime.service';

@Injectable()
export class GroundService {

  constructor (
    private _constantsService : ConstantsService,
    private _runtimeService : RuntimeService
  ) {

  }

  getPiece (
    rowIndex : number,
    colIndex : number
  ) : number {
    return this._runtimeService.ground[rowIndex][colIndex];
  }
  setPiece (
    rowIndex : number,
    colIndex : number,
    type : number
  ) : number {
    return this._runtimeService.ground[rowIndex][colIndex] = type;
  }

  getNextPieceIndex () : number[] {
    const head = this._runtimeService.snake[0];
    const rowIndex = head[0];
    const colIndex = head[1];

    let nextRowIndex, nextColIndex;

    if (this._runtimeService.direction === this._constantsService.DIRECTION_UP) {
      nextRowIndex = rowIndex - 1;
      nextColIndex = colIndex;
    } else if (this._runtimeService.direction === this._constantsService.DIRECTION_RIGHT) {
      nextRowIndex = rowIndex;
      nextColIndex = colIndex + 1;
    } else if (this._runtimeService.direction === this._constantsService.DIRECTION_DOWN) {
      nextRowIndex = rowIndex + 1;
      nextColIndex = colIndex;
    } else if (this._runtimeService.direction === this._constantsService.DIRECTION_LEFT) {
      nextRowIndex = rowIndex;
      nextColIndex = colIndex - 1;
    } else {
      nextRowIndex = -1;
      nextColIndex = -1;
    }

    return [nextRowIndex, nextColIndex];
  }

  initGround () : number[][] {
    let halfSize : number = Math.floor(this._constantsService.GROUND_SIZE / 2);

    this._runtimeService.ground = [];
    for (let i : number = 0; i < this._constantsService.GROUND_SIZE; i ++) {
      this._runtimeService.ground.push(new Array(this._constantsService.GROUND_SIZE).fill(this._constantsService.GROUND_NONE));
    }

    return this._runtimeService.ground;
  }
  initGroundBySnake (
    snake : number[][]
  ) : number [][] {
    for (let i : number = 0; i < snake.length; i ++) {
      this._runtimeService.ground[snake[i][0]][snake[i][1]] = this._constantsService.GROUND_SNAKE_BODY;
    }

    return this._runtimeService.ground;
  }

}
