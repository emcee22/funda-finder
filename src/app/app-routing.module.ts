import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'house-list', component: HouseListComponent },
  { path: 'house-details/:id', component: HouseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
