import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  subject: string='';
  cities: any[]=['egypt', 'alex'];
  selectedCity: string=''
  enteredCity: any=''
  constructor() { }

  ngOnInit(): void {
    this.selectedCity= this.cities[0]
  }

  submit() {
    console.log(this.subject, this.enteredCity)

  }
}
