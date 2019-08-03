import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseComponent } from './case.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '', component: CaseComponent, children: [
      { path: 'table', component: TableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
