import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registeration',
    loadChildren: () => import('../app/registeration/registeration.module').then(m => m.RegisterationPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('../app/notifications/notifications.module').then(m => m.NotificationsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
