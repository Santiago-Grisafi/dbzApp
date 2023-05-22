import { Component } from '@angular/core';
import { Char } from 'src/app/interface/Char.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  chars : Char[] = [{name: "", power: 0}];

  getChars = (chars: Char[]) =>{
    this.chars = chars;
  }
}
