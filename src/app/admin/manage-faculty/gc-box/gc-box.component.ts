import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gc-box',
  standalone: true,
  imports: [NgClass],
  templateUrl: './gc-box.component.html',
  styleUrl: './gc-box.component.css'
})
export class GcBoxComponent {

  @Input('collegeAbbv') collegeAbbv: string = ''
  @Input('collegeTitle') collegeTitle: string = ''
  @Input('imgPath') imgPath: string = ''
  @Input('bgColor') bgColor: string = ''
  @Input('id') id: number = 0
  @Input('radioGroup') radioGroup:string = ''

  @Output() setRole = new EventEmitter()

  setFacultyRole(value: string) {
    this.setRole.emit(value);
  }
}
