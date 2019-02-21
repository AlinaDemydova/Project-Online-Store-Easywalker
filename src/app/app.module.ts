import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageComponent } from './main-page/main-page.component';
import { SectionPageComponent } from './section-page/section-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalCallComponent } from './modal-call/modal-call.component';
import { AccessorisePageComponent } from './accessorise-page/accessorise-page.component';
import { ChooseBuggyComponent } from './choose-buggy/choose-buggy.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CompareComponent } from './compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SectionPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ModalCallComponent,
    AccessorisePageComponent,
    ChooseBuggyComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    // Messages
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
