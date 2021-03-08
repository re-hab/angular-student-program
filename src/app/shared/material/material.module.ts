import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';


const materials: any[]=[
  MatCardModule, 
  MatInputModule,
  MatButtonModule,
  MatChipsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatRadioModule
]


@NgModule({
  declarations: [],
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})
export class MaterialModule { }
