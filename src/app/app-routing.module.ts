import { NgModule } from '@angular/core' ;

import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutmeComponent
  },
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}