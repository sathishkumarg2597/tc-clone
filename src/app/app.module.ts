import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchSectionComponent } from './components/header/search-section/search-section.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoryHeaderComponent } from './components/category-header/category-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartSectionComponent } from './components/header/cart-section/cart-section.component';
import { TotalPipe } from './pipes/total.pipe';
import { CombinedReducers } from './store';

//Modules
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSectionComponent,
    CategoryHeaderComponent,
    LayoutComponent,
    FooterComponent,
    CartSectionComponent,
    TotalPipe,
  ],
  imports: [
    HomeModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(CombinedReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
