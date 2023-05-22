import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';
import { ListCharsComponent } from './character/list-chars/list-chars.component';
import { AddCharComponent } from './character/add-char/add-char.component';

@NgModule({
  declarations: [
    HomeComponent,
    CharacterComponent,
    ListCharsComponent,
    AddCharComponent,
  ],
  exports:[
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
