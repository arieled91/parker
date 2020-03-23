import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarAddPage} from './components/car-add-page/car-add.page';
import {CarEditPage} from './components/car-edit-page/car-edit.page';

const routes: Routes = [
  {path: '', component: CarAddPage},
  {path: ':id', component: CarEditPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPageRoutingModule {
}
