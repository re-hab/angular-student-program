import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-routing.module'
import { ProgramsComponent } from './programs.component';
import { FormsModule, FormBuilder} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    ProgramsComponent,
    ListComponent,

  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    FormsModule,
    SharedModule
    
  ],
  providers: [FormBuilder],
   exports: [
       ProgramsComponent
   ]
})
export class ProgramsModule { }
