import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterEvent = new EventEmitter<string>();




  sendFilterType(type: 'todos'|'naoLidos'|'lidos'){
     this.filterEvent.emit(type);
  }


}
