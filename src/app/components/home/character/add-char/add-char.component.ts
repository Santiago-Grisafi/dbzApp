import { Component, EventEmitter, Output } from '@angular/core';
import { Char } from 'src/app/interface/Char.interface';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css']
})
export class AddCharComponent {

  char: Char = {name: "", power: 0};

  chars: Char[] = [{name: "Goku", power: 7000}];

  @Output() listChars: EventEmitter<Char[]> = new EventEmitter();

  addChar = () =>{
    if(this.char.name.trim().length<=0 || this.char.power<=0){return;}
    this.chars.push(this.char); this.char = {name: "", power: 0};
    this.listChars.emit(this.chars);
  }

}
