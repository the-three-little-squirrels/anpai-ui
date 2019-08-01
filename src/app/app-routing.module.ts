import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // 带嵌套主页
  {
    path: 'main',
    component: LayoutComponent,
    loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule),
    data: {
      breadcrumb: 'Home'
    }
  },
  // 登录模块
  { path: 'passport', loadChildren: () => import('./passport/passport.module').then(m => m.PassportModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
