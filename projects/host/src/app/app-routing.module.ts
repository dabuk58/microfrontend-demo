import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'posts',
    loadChildren: () => import('remoteapp1/homeModule').then((m) => m.HomeModule),
  },
  {
    path: 'add-post',
    loadChildren: () => import('remoteapp2/homeModule').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
