import { Injectable } from '@angular/core';

@Injectable()
export class RuntimeService {

  direction : number;
  ground : number[][];
  snake : number[][];
  gameState : number;

}
