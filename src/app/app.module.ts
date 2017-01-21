import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ConstantsService } from './services/constants/constants.service';
import { DirectionService } from './services/direction/direction.service';
import { GroundService } from './services/ground/ground.service';
import { RuntimeService } from './services/runtime/runtime.service';
import { SnakeService } from './services/snake/snake.service';

import { AppComponent } from './app.component';
import { GroundComponent } from './components/ground/ground.component';
import { PieceComponent } from './components/piece/piece.component';

@NgModule({
  declarations: [
    AppComponent,
    GroundComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ConstantsService,
    DirectionService,
    GroundService,
    RuntimeService,
    SnakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
