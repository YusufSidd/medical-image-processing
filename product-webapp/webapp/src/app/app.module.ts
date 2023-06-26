import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import { ChatServiceAppComponent } from './chat-service-app/chat-service-app.component';

import { AddProductComponent } from './add-product/add-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
 import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RegisterUserComponent } from './register-user/register-user.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './add-product/dialog-example/dialog-example.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { FilterPipe } from './filter.pipe';
import { VideoServiceComponent } from './video-service/video-service.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductCategoriesComponent,
    
    LoginComponent,
    ChatServiceAppComponent,

    ProductDetailsComponent,
    RegisterUserComponent,
    AddProductComponent,
    MyProfileComponent,
    DialogExampleComponent,
    LandingPageComponent,
    MyProductsComponent,
    ChatBotComponent,
    FilterPipe,
    VideoServiceComponent,
  
    
    

  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDatepickerModule,
    MatStepperModule,
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatTableModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
