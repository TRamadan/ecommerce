import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
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
  {
    path: 'aboutus',
    loadChildren: () => import('../app/aboutus/aboutus.module').then(m => m.AboutusPageModule)
  },
  {
    path: 'favoraits',
    loadChildren: () => import('../app/favoraits/favoraits.module').then(m => m.FavoraitsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('../app/privacy/privacy.module').then(m => m.PrivacyPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('../app/contactus/contactus.module').then(m => m.ContactusPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('../app/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },
  {
    path: 'paymentoptions',
    loadChildren: () => import('../app/paymentoptions/paymentoptions.module').then(m => m.PaymentoptionsPageModule)
  },
  {
    path: 'visapayment',
    loadChildren: () => import('../app/visapayment/visapayment.module').then(m => m.VisapaymentPageModule)
  },
  {
    path: 'confirmationmodal',
    loadChildren: () => import('../app/confirmationmodal/confirmationmodal.module').then(m => m.ConfirmationmodalPageModule)
  },
  {
    path: 'confirmrequest',
    loadChildren: () => import('../app/confirmrequest/confirmrequest.module').then(m => m.ConfirmrequestPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('../app/orders/orders.module').then(m => m.OrdersPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
