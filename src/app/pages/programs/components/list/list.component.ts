import { Component, OnInit, Input } from '@angular/core';
import { Constant } from 'src/app/core/defines/app.constants';
import { ProgramService } from 'src/app/core/services/program.service'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() searchCity: any = null;
  @Input() searchLearn: any = null;

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
  selectedSortType: string = 'Ascen'

  programs: any[] = [];


  constructor(private progService: ProgramService) { }

  ngOnInit(): void {
    this.cityChipList = ['Paris', 'Barcelona', 'Brest'];
    this.fieldChipList = ['Business & Management', 'International Business'];
    this.schoolChipList = ['TOULOUSE BUSINESS SCHOOL', 'EXCELIA', 'EM NORMANDIE', 'ESSCA'];
    this.getPrograms();
  }

  getPrograms() {
    this.progService.getPrograms().subscribe((data: any) => {
      this.programs = data[2].data
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

    if (this.selectedSortType) {
      switch (this.selectedSortType) {
        case 'Ascen':
          this.programs.sort((a, b) => parseFloat(a.fee) - parseFloat(b.fee));
          break;

        case 'Dscen':
          this.programs.sort((a, b) => parseFloat(b.fee) - parseFloat(a.fee));
          break;
      }
    }
  }

  filterFromOutside() {
    this.progService.getPrograms().subscribe((data: any) => {

      this.programs = data[2].data
      if (this.searchCity)
        this.programs = this.programs.filter((item) => {
          return item.city === this.searchCity;
        });

      if (this.searchLearn)
        this.programs = this.programs.filter((item) => {
          return item.level.includes(this.searchLearn) || item.type.includes(this.searchLearn);
        });
    })



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

}
