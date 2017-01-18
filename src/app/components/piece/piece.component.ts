import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ConstantsService } from '../../services/constants/constants.service';
import { DirectionService } from '../../services/direction/direction.service';
import { GroundService } from '../../services/ground/ground.service';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnChanges, OnInit {

  @Input() colIndex : number;
  @Input() rowIndex : number;

  backwardDirection : number;
  forwardDirection : number;
  piece : number;

  state : any;

  constructor (
    private _constantsService : ConstantsService,
    private _directionService : DirectionService,
    private _groundService : GroundService
  ) {

  }

  ngOnChanges () : void {
    this._changeState();
  }
  ngOnInit () : void {
    this._changeState();
  }

  private _changeState () : void {
    this.piece = this._groundService.getPiece(this.rowIndex, this.colIndex);
    this.backwardDirection = this._directionService.getBackwardDirection(this.rowIndex, this.colIndex);
    this.forwardDirection = this._directionService.getForwardDirection(this.rowIndex, this.colIndex);

    this.state = {
      'ground-none'       : this.piece === this._constantsService.GROUND_NONE,
      'ground-snake-body' : this.piece === this._constantsService.GROUND_SNAKE_BODY,
      'ground-food'       : this.piece === this._constantsService.GROUND_FOOD,

      'direction-up'      : this.forwardDirection  === this._constantsService.DIRECTION_UP    ||
                            this.backwardDirection === this._constantsService.DIRECTION_UP    ,
      'direction-right'   : this.forwardDirection  === this._constantsService.DIRECTION_RIGHT ||
                            this.backwardDirection === this._constantsService.DIRECTION_RIGHT ,
      'direction-down'    : this.forwardDirection  === this._constantsService.DIRECTION_DOWN  ||
                            this.backwardDirection === this._constantsService.DIRECTION_DOWN  ,
      'direction-left'    : this.forwardDirection  === this._constantsService.DIRECTION_LEFT  ||
                            this.backwardDirection === this._constantsService.DIRECTION_LEFT
    };
  }

}
