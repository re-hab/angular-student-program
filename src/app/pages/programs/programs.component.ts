import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { Constant } from 'src/app/core/defines/app.constants';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  @ViewChild('programList') programList: ListComponent;

  subject: string='';
  cities: any[]= Constant.availableCities;
  enteredCity: string;
  constructor() { }

  ngOnInit(): void {
    //this.selectedCity= this.cities[0]
  }

  submit() {
    this.programList.filterFromOutside();

  }
}
