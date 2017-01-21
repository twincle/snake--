import { Component, OnInit } from '@angular/core';

import { ConstantsService } from '../../services/constants/constants.service';
import { DirectionService } from '../../services/direction/direction.service';
import { FoodService } from '../../services/food/food.service';
import { GroundService } from '../../services/ground/ground.service';
import { RuntimeService } from '../../services/runtime/runtime.service';
import { SnakeService } from '../../services/snake/snake.service';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.scss']
})
export class GroundComponent implements OnInit {

  ground : number[][];

  constructor (
    public groundService : GroundService,

    private _constantsService : ConstantsService,
    private _directionService : DirectionService,
    private _foodService : FoodService,
    private _runtimeService : RuntimeService,
    private _snakeService : SnakeService
  ) {

  }

  trackByIndex (
    item : number[] | number,
    index : number
  ) : number {
    return index;
  }
  trackByItem (
    item : number[] | number,
    index : number
  ) : number[] | number {
    return item;
  }

  ngOnInit () : void {
    this._initGame();
    setInterval(() : void => {
      this._snakeService.stepForward();
    }, 1000 / 4);
  }

  private _initGame () : void {
    this.groundService.initGround();
    this._directionService.initDirection();
    this._snakeService.initSnake();

    this.groundService.initGroundBySnake(this._runtimeService.snake);
    this._runtimeService.gameState = this._constantsService.GAME_STATE_RUNNING;
    this._foodService.produceFood();

    this.ground = this._runtimeService.ground;
  }

}