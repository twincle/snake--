import { Component, Input } from '@angular/core';

import { ConstantsService } from '../../services/constants/constants.service';
import { DirectionService } from '../../services/direction/direction.service';
import { GroundService } from '../../services/ground/ground.service';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent {

  @Input() colIndex : number;
  @Input() rowIndex : number;

  piece : number;
  state : any = {};

  constructor (
    private _constantsService : ConstantsService,
    private _directionService : DirectionService,
    private _groundService : GroundService
  ) {

  }

  setState () : any {
    const piece = this._groundService.getPiece(this.rowIndex, this.colIndex);
    const backwardDirection = this._directionService.getBackwardDirection(this.rowIndex, this.colIndex);
    const forwardDirection = this._directionService.getForwardDirection(this.rowIndex, this.colIndex);

    return Object.assign(this.state, {
      'ground-none'       : piece === this._constantsService.GROUND_NONE,
      'ground-snake-body' : piece === this._constantsService.GROUND_SNAKE_BODY,
      'ground-food'       : piece === this._constantsService.GROUND_FOOD,

      'direction-up'      : forwardDirection  === this._constantsService.DIRECTION_UP    ||
                            backwardDirection === this._constantsService.DIRECTION_UP    ,
      'direction-right'   : forwardDirection  === this._constantsService.DIRECTION_RIGHT ||
                            backwardDirection === this._constantsService.DIRECTION_RIGHT ,
      'direction-down'    : forwardDirection  === this._constantsService.DIRECTION_DOWN  ||
                            backwardDirection === this._constantsService.DIRECTION_DOWN  ,
      'direction-left'    : forwardDirection  === this._constantsService.DIRECTION_LEFT  ||
                            backwardDirection === this._constantsService.DIRECTION_LEFT
    });
  }

}
