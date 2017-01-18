import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  GROUND_SIZE : number = 65;

  GROUND_NONE       : number = 0;
  GROUND_SNAKE_BODY : number = 1;
  GROUND_FOOD       : number = 2;

  DIRECTION_NONE  : number = 0;
  DIRECTION_UP    : number = 1;
  DIRECTION_RIGHT : number = 2;
  DIRECTION_DOWN  : number = 3;
  DIRECTION_LEFT  : number = 4;

  KEY_CODE_ARROW_UP    : number = 38;
  KEY_CODE_ARROW_RIGHT : number = 39;
  KEY_CODE_ARROW_DOWN  : number = 40;
  KEY_CODE_ARROW_LEFT  : number = 37;

  constructor () { }

}
