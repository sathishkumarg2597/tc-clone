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
import { CategoryEffect } from './store/category/category.effect';
import { environment } from 'src/environments/environment';

//Modules
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreModule.forRoot(CombinedReducers),
    EffectsModule.forRoot([CategoryEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
