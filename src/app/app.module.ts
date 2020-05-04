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
import { FormsComponent } from './forms/forms.component';
import { TrainingComponent } from './training/training.component';
import { LetterComponent } from './letter/letter.component';
import { NotificationComponent } from './notification/notification.component';
import { GeneralComponent } from './general/general.component';
import { OfficeComponent } from './office/office.component';
import { GazatteComponent } from './gazatte/gazatte.component';
import { PensionComponent } from './pension/pension.component';
import { PensionNotificationComponent } from './pension-notification/pension-notification.component';
import { PaoNotificationComponent } from './pao-notification/pao-notification.component';
import { DaComponent } from './da/da.component';
import { TransferComponent } from './transfer/transfer.component';
import { DdoRegisterationComponent } from './ddo-registeration/ddo-registeration.component';
import { RcoRegisterationComponent } from './rco-registeration/rco-registeration.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AgReportComponent } from './ag-report/ag-report.component';

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
    VacanciesComponent,
    FormsComponent,
    TrainingComponent,
    LetterComponent,
    NotificationComponent,
    GeneralComponent,
    OfficeComponent,
    GazatteComponent,
    PensionComponent,
    PensionNotificationComponent,
    PaoNotificationComponent,
    DaComponent,
    TransferComponent,
    DdoRegisterationComponent,
    RcoRegisterationComponent,
    ReceiptComponent,
    AgReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
