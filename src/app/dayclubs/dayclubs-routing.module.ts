import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayclubsPage } from './dayclubs.page';

const routes: Routes = [
  {
    path: '',
    component: DayclubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayclubsPageRoutingModule {}
