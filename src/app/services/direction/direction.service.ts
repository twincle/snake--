import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants/constants.service';
import { RuntimeService } from '../runtime/runtime.service';
import { SnakeService } from '../snake/snake.service';

@Injectable()
export class DirectionService {

  constructor (
    private _constantsService : ConstantsService,
    private _runtimeService : RuntimeService,
    private _snakeService : SnakeService
  ) {
    this._onInit();
  }

  setDirection (
    direction : number
  ) : number {
    return this._runtimeService.direction = direction;
  }

  getForwardDirection (
    rowIndex : number,
    colIndex : number
  ) : number {
    const bodyIndex : number = this._snakeService.indexOfSnakeBody(rowIndex, colIndex);

    if (bodyIndex <= 0) {
      return this._constantsService.DIRECTION_NONE;
    } else {
      const forwardIndex : number = bodyIndex - 1;
      const forwardRowIndex : number = this._runtimeService.snake[forwardIndex][0];
      const forwardColIndex : number = this._runtimeService.snake[forwardIndex][1];

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
    const bodyIndex : number = this._snakeService.indexOfSnakeBody(rowIndex, colIndex);

    if (bodyIndex < 0 || bodyIndex >= this._runtimeService.snake.length - 1) {
      return this._constantsService.DIRECTION_NONE;
    } else {
      const backwardIndex : number = bodyIndex + 1;
      const backwardRowIndex : number = this._runtimeService.snake[backwardIndex][0];
      const backwardColIndex : number = this._runtimeService.snake[backwardIndex][1];

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
    return this._runtimeService.direction = this._constantsService.DIRECTION_RIGHT;
  }

  private _onInit () : void {
    document.body.onkeydown = (e : KeyboardEvent) : void => {
      if (
        e.keyCode === this._constantsService.KEY_CODE_ARROW_UP &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_UP &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_DOWN
      ) {
        this.setDirection(this._constantsService.DIRECTION_UP);
      } else if (
        e.keyCode === this._constantsService.KEY_CODE_ARROW_RIGHT &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_RIGHT &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_LEFT
      ) {
        this.setDirection(this._constantsService.DIRECTION_RIGHT);
      } else if (
        e.keyCode === this._constantsService.KEY_CODE_ARROW_DOWN &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_UP &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_DOWN
      ) {
        this.setDirection(this._constantsService.DIRECTION_DOWN);
      } else if (
        e.keyCode === this._constantsService.KEY_CODE_ARROW_LEFT &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_RIGHT &&
        this._runtimeService.direction !== this._constantsService.DIRECTION_LEFT
      ) {
        this.setDirection(this._constantsService.DIRECTION_LEFT);
      }
    };
  }

}
