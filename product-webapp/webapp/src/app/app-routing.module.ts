import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ChatServiceAppComponent } from './chat-service-app/chat-service-app.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { VideoServiceComponent } from "./video-service/video-service.component";


const routes: Routes = [
  { path: "videoService", component: VideoServiceComponent },
  {path: '', component: LandingPageComponent},
  { path: 'showProduct', component: ProductCategoriesComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: MyProfileComponent},
  {path:'detailss', component: ProductDetailsComponent},
  {path:'details', component: ProductDetailsComponent},
  {path:'chatbox',component:ChatServiceAppComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'chat', component: ChatServiceAppComponent},
  { path: 'details', component: ProductDetailsComponent},
 {path: 'myProducts',component:MyProductsComponent},
 {path:'chatbot',component: ChatBotComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
