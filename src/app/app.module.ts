import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoryHeaderComponent } from './components/category-header/category-header.component';
import { FooterComponent } from './components/footer/footer.component';

//Modules
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSectionComponent,
    CategoryHeaderComponent,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    HomeModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
