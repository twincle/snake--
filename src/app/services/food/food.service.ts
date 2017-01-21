import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants/constants.service';
import { RuntimeService } from '../runtime/runtime.service';

@Injectable()
export class FoodService {

  private _groundNonePieces : number[][];

  constructor (
    private _constantsService : ConstantsService,
    private _runtimeService : RuntimeService
  ) {

  }

  produceFood () : void {
    if (this._runtimeService.gameState !== this._constantsService.GAME_STATE_RUNNING) {
      return;
    }

    this._collectNonePieces();

    const len = this._groundNonePieces.length;
    const index = Math.floor(Math.random() * len);
    const foodPiece = this._groundNonePieces[index];

    console.log(foodPiece);

    this._runtimeService.ground[foodPiece[0]][foodPiece[1]] = this._constantsService.GROUND_FOOD;
  }

  private _collectNonePieces () : void {
    this._groundNonePieces = [];
    for (let i : number = 0; i < this._constantsService.GROUND_SIZE; i ++) {
      for (let j : number = 0; j < this._constantsService.GROUND_SIZE; j ++) {
        if (this._runtimeService.ground[i][j] === this._constantsService.GROUND_NONE) {
          this._groundNonePieces.push([i, j]);
        }
      }
    }
  }


}
