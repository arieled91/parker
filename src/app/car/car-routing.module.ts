import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddCarPage} from './pages/add-car.page';
import {EditCarPage} from './pages/edit-car.page';

const routes: Routes = [
  {path: '', component: AddCarPage},
  {path: ':id', component: EditCarPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPageRoutingModule {
}
