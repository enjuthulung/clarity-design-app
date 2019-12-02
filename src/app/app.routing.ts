import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserLayoutComponent } from './containers/user-layout/user-layout.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';

// Import Containers

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'admin-dashboard',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        data: {
          title: 'Admin Dashboard'
        },
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: UserDashboardComponent,
        data: {
          title: 'User Dashboard'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
