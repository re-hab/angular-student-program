import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/core/defines/app.constants';
import { ProgramService } from 'src/app/core/services/program.service'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  availableCities: any[] = Constant.availableCities;
  availableFields: any[] = Constant.availableFields;
  availableSchools: any[] = Constant.availableSchools;

  cityChipList: any[] = [];
  fieldChipList: any[] = [];
  schoolChipList: any[] = [];

  selectedCity: any = null;
  selectedField: any = null;
  selectedSchool: any = null;

  selectable = true;
  removable = true;

  selectedProgram: string = 'Bachelor';
  selectedLanguage: string = 'All';
  selectedSortType: string = 'low'

  programs: any[] = [];


  constructor(private progService: ProgramService) { }

  ngOnInit(): void {
    this.cityChipList = ['Paris', 'Barcelona', 'Marseille'];
    this.fieldChipList = ['Business & Management', 'International Business'];
    this.schoolChipList = ['TOULOUSE BUSINESS SCHOOL', 'EXCELIA', 'EM NORMANDIE', 'ESSCA'];
    this.getPrograms();
  }

  getPrograms(){
    this.progService.getPrograms().subscribe((data: any) => {
      console.log(data)
      this.programs = data[2].data
      console.log(this.programs)
      this.filter()
    })

  }
  filter(): void {
    if (this.cityChipList)
      this.programs = this.programs.filter((item) => {
        return this.cityChipList.includes(item.city);
      });


    if (this.selectedProgram)
      this.programs = this.programs.filter((item) => {
        return item.level === this.selectedProgram;
      });

    if (this.fieldChipList)
      this.programs = this.programs.filter((item) => {
        return this.fieldChipList.includes(item.type);
      });

    if (this.schoolChipList)
      this.programs = this.programs.filter((item) => {
        return this.schoolChipList.includes(item.school);
      });

    if (this.selectedLanguage)
      switch (this.selectedLanguage) {
        case 'All': this.programs = this.programs;
          break;

        default: this.programs = this.programs.filter((item) => {
          return item.Language === this.selectedLanguage;
        });

      }



    console.log(this.programs)
  }

  addCity() {
    let notExist: boolean = false;
    this.cityChipList.forEach((item) => {
      if (item === this.selectedCity)
        notExist = true
    })

    if (!notExist)
      this.cityChipList.push(this.selectedCity)

  }
  removeCity(item: string): void {
    this.cityChipList = this.cityChipList.filter(elem => elem !== item)
  }

  addField() {
    let notExist: boolean = false;
    this.fieldChipList.forEach((item) => {
      if (item === this.selectedField)
        notExist = true
    })

    if (!notExist)
      this.fieldChipList.push(this.selectedField)

  }

  removeField(item: string) {
    this.fieldChipList = this.fieldChipList.filter(elem => elem !== item)
  }

  addSchool() {
    let notExist: boolean = false;
    this.schoolChipList.forEach((item) => {
      if (item === this.selectedSchool)
        notExist = true
    })

    if (!notExist)
      this.schoolChipList.push(this.selectedCity)
  }

  removeSchool(item: string) {
    this.schoolChipList = this.schoolChipList.filter(elem => elem !== item)
  }

  submit() {
    console.log(this.selectedProgram, this.selectedLanguage, this.selectedSortType)
  }

}
