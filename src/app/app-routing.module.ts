import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'programs',
    // loadChildren: () => 
    // import('./pages/home/home.module').then((m) => m.HomeModule),
     pathMatch: 'full',
  },
  {
    path: 'programs',
    loadChildren: () => 
    import('./pages/programs/programs.module').then((m) => m.ProgramsModule),
  },
  {
    path: 'schools',
    redirectTo: 'programs',
     pathMatch: 'full',
  },
  {
    path: 'about',
    redirectTo: 'programs',
  },
  {
    path: 'login',
    redirectTo: 'programs',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
