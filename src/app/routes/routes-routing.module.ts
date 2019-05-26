import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 案例系统
  { path: 'case', loadChildren: './case/case.module#CaseModule', data: { breadcrumb: 'Case' } },
  // 系统管理
  { path: 'system', loadChildren: './system/system.module#SystemModule', data: { breadcrumb: 'System' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
