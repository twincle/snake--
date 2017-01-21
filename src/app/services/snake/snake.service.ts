import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants/constants.service';
import { FoodService } from '../../services/food/food.service';
import { GroundService } from '../ground/ground.service';
import { RuntimeService } from '../runtime/runtime.service';

@Injectable()
export class SnakeService {

  constructor(
    private _constantsService : ConstantsService,
    private _foodService : FoodService,
    private _groundService : GroundService,
    private _runtimeService : RuntimeService
  ) {

  }

  indexOfSnakeBody (
    rowIndex : number,
    colIndex : number
  ) : number {
    for (let i : number = 0; i < this._runtimeService.snake.length; i ++) {
      if (rowIndex === this._runtimeService.snake[i][0] && colIndex === this._runtimeService.snake[i][1]) {
        return i;
      }
    }
    return -1;
  }
  stepForward () : void {
    if (this._runtimeService.gameState !== this._constantsService.GAME_STATE_RUNNING) {
      return;
    }

    const nextPieceIndex : number[] = this._groundService.getNextPieceIndex();
    if (nextPieceIndex[0] < 0 || nextPieceIndex[1] < 0) {
      this._runtimeService.gameState = this._constantsService.GAME_STATE_OVER;
    }

    const nextPiece : number = this._groundService.getPiece(nextPieceIndex[0], nextPieceIndex[1]);
    const lastSnakeBodyPieceIndex : number[] = this._runtimeService.snake[this._runtimeService.snake.length - 1];
    if (nextPiece === this._constantsService.GROUND_NONE) {
      this._groundService.setPiece(nextPieceIndex[0], nextPieceIndex[1], this._constantsService.GROUND_SNAKE_BODY);
      this._groundService.setPiece(lastSnakeBodyPieceIndex[0], lastSnakeBodyPieceIndex[1], this._constantsService.GROUND_NONE);
      this._runtimeService.snake.unshift(nextPieceIndex);
      this._runtimeService.snake.pop();
   } else if (nextPiece === this._constantsService.GROUND_SNAKE_BODY) {
      this._runtimeService.gameState = this._constantsService.GAME_STATE_OVER;
    } else if (nextPiece === this._constantsService.GROUND_FOOD) {
      this._groundService.setPiece(nextPieceIndex[0], nextPieceIndex[1], this._constantsService.GROUND_SNAKE_BODY);
      this._runtimeService.snake.unshift(nextPieceIndex);
      this._foodService.produceFood();
    }
  }

  initSnake () : number[][] {
    let halfSize : number = Math.floor(this._constantsService.GROUND_SIZE / 2);

    this._runtimeService.snake = [];
    this._runtimeService.snake.push([halfSize, halfSize + 1]);
    this._runtimeService.snake.push([halfSize, halfSize]);
    this._runtimeService.snake.push([halfSize, halfSize - 1]);

    return this._runtimeService.snake;
  }

}
