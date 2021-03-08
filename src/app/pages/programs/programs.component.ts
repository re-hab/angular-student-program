import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from './components/list/list.component'
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  @ViewChild('programList') programList: ListComponent;

  subject: string='';
  cities: any[]=['egypt', 'alex'];
  selectedCity: string=''
  enteredCity: any=''
  constructor() { }

  ngOnInit(): void {
    this.selectedCity= this.cities[0]
  }

  submit() {
    this.programList.filterFromOutside();
    console.log(this.subject, this.enteredCity)

  }
}
