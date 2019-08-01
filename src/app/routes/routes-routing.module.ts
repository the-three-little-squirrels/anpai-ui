import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 案例系统
  { path: 'case', loadChildren: () => import('./case/case.module').then(m => m.CaseModule), data: { breadcrumb: 'Case' } },
  // 系统管理
  { path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule), data: { breadcrumb: 'System' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
