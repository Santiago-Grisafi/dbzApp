import { Component, Input } from '@angular/core';
import { Char } from 'src/app/interface/Char.interface';

@Component({
  selector: 'app-list-chars',
  templateUrl: './list-chars.component.html',
  styleUrls: ['./list-chars.component.css']
})
export class ListCharsComponent {

  @Input() chars : Char [] = [];

}
