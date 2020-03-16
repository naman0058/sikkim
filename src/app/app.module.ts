import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SimplecardComponent } from './simplecard/simplecard.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SimplecardComponent,
    FlipcardComponent,
    PartnerComponent,
    FooterComponent,
    FeedbackComponent,
    ContactusComponent,
    SitemapComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
