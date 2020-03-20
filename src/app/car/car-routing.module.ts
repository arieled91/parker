import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarPage} from './car.page';

const routes: Routes = [
  {path: '', component: CarPage},
  {path: ':id', component: CarPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPageRoutingModule {
}
