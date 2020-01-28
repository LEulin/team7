import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { StudentInfo } from '../../../../../services/studentInfo';
import { Record } from '../../../../../services/record';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['../../student-table/student-table.component.scss']
})
export class SuggestionsComponent implements OnInit {
  @Input() suggestions: Array<StudentInfo>;
  @Input() student: Record;
  @Output() select = new EventEmitter<StudentInfo>();
  constructor() { 
    this.suggestions = new  Array<StudentInfo>();
  }

  ngOnInit() {
  }

  clicked(name: StudentInfo) {
    this.select.emit(name);
  }

}