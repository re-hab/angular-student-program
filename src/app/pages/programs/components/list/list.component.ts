import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cities: any[] = ['a', 'b'];
  selectedCity: any = null;
  selectedField: any= null;
  selectedSchool: any = null;
  chipList: any[] = ['c', 'd'];
  selectable = true;
  removable = true;
  selectedProgram: string='';
  selectedLanguage: string = '';
  selectedSortType: string=''


  constructor() { }

  ngOnInit(): void {
  }

  addCity() {
    let notExist: boolean = false;
    this.chipList.forEach((item) => {
      if (item === this.selectedCity)
         notExist = true
    })

    if(!notExist)
    this.chipList.push(this.selectedCity)

  }
  removeCity(item: string): void {
    const index = this.chipList.indexOf(item);

    if (index >= 0) {
      this.chipList.splice(index, 1);
    }
  }

  addField(){
  }

  removeField(item: string){

  }

  addSchool(){

  }

  removeSchool() {

  }

  submit(){
    console.log(this.selectedProgram, this.selectedLanguage, this.selectedSortType)
  }

}
