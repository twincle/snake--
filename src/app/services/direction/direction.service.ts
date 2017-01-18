import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants/constants.service';
import { SnakeService } from '../snake/snake.service';

@Injectable()
export class DirectionService {

  direction : number;

  constructor (
    private _constantsService : ConstantsService,
    private _snakeService : SnakeService
  ) {

  }

  getForwardDirection (
    rowIndex : number,
    colIndex : number
  ) : number {
    let bodyIndex = this._snakeService.indexOfSnakeBody(rowIndex, colIndex);

    if (bodyIndex <= 0) {
      return this._constantsService.DIRECTION_NONE;
    } else {
      let forwardIndex = bodyIndex - 1;
      let forwardRowIndex = this._snakeService.snake[forwardIndex][0];
      let forwardColIndex = this._snakeService.snake[forwardIndex][1];

      if (forwardRowIndex === rowIndex - 1 && forwardColIndex === colIndex) {
        return this._constantsService.DIRECTION_UP;
      } else if (forwardRowIndex === rowIndex && forwardColIndex === colIndex + 1) {
        return this._constantsService.DIRECTION_RIGHT;
      } else if (forwardRowIndex === rowIndex + 1 && forwardColIndex === colIndex) {
        return this._constantsService.DIRECTION_DOWN;
      } else if (forwardRowIndex === rowIndex && forwardColIndex === colIndex - 1) {
        return this._constantsService.DIRECTION_LEFT;
      } else {
        return this._constantsService.DIRECTION_NONE;
      }
    }
  }
  getBackwardDirection (
    rowIndex : number,
    colIndex : number
  ) : number {
    let bodyIndex = this._snakeService.indexOfSnakeBody(rowIndex, colIndex);

    if (bodyIndex < 0 || bodyIndex >= this._snakeService.snake.length - 1) {
      return this._constantsService.DIRECTION_NONE;
    } else {
      let backwardIndex = bodyIndex + 1;
      let backwardRowIndex = this._snakeService.snake[backwardIndex][0];
      let backwardColIndex = this._snakeService.snake[backwardIndex][1];

      if (backwardRowIndex === rowIndex - 1 && backwardColIndex === colIndex) {
        return this._constantsService.DIRECTION_UP;
      } else if (backwardRowIndex === rowIndex && backwardColIndex === colIndex + 1) {
        return this._constantsService.DIRECTION_RIGHT;
      } else if (backwardRowIndex === rowIndex + 1 && backwardColIndex === colIndex) {
        return this._constantsService.DIRECTION_DOWN;
      } else if (backwardRowIndex === rowIndex && backwardColIndex === colIndex - 1) {
        return this._constantsService.DIRECTION_LEFT;
      } else {
        return this._constantsService.DIRECTION_NONE;
      }
    }
  }

  initDirection () : number {
    return this.direction = this._constantsService.DIRECTION_RIGHT;
  }

}
