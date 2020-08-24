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
  },
  {
    path: 'menu',
    loadChildren: () => import('../app/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../app/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../app/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('../app/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'productdetails',
    loadChildren: () => import('../app/productdetails/productdetails.module').then(m => m.ProductdetailsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('../app/categories/categories.module').then(m => m.CategoriesPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
