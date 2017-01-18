import { Component, OnInit } from '@angular/core';

import { DirectionService } from '../../services/direction/direction.service';
import { GroundService } from '../../services/ground/ground.service';
import { SnakeService } from '../../services/snake/snake.service';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.scss']
})
export class GroundComponent implements OnInit {

  constructor (
    public groundService : GroundService,

    private _directionService : DirectionService,
    private _snakeService : SnakeService
  ) {

  }

  trackByIndex (
    item : number[],
    index : number
  ) : number {
    return index;
  }

  ngOnInit () : void {
    this._initGame();
  }

  private _initGame () : void {
    this.groundService.initGround();
    this._directionService.initDirection();
    this._snakeService.initSnake();

    this.groundService.initGroundBySnake(this._snakeService.snake);
  }

}