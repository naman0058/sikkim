import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {NavbarComponent} from './navbar/navbar.component'
import {NavbarComponent} from './navbar/navbar.component'
import {HomeComponent} from './home/home.component'
import {FeedbackComponent} from './feedback/feedback.component'
import {ContactusComponent} from './contactus/contactus.component'
import {SitemapComponent} from './sitemap/sitemap.component'
import {VacanciesComponent} from './vacancies/vacancies.component'
import { FormsComponent } from "./forms/forms.component";
import {TrainingComponent} from "./training/training.component"
import {LetterComponent} from "./letter/letter.component"
import {NotificationComponent} from "./notification/notification.component"
import {GeneralComponent} from "./general/general.component"
import {OfficeComponent} from "./office/office.component"
import { GazatteComponent } from "./gazatte/gazatte.component";
import { PensionComponent } from "./pension/pension.component";
import { PensionNotificationComponent } from "./pension-notification/pension-notification.component";
import { PaoNotificationComponent } from "./pao-notification/pao-notification.component";
import { DaComponent  } from "./da/da.component";
import { TransferComponent } from "./transfer/transfer.component";
import {DdoRegisterationComponent} from "./ddo-registeration/ddo-registeration.component";
import {RcoRegisterationComponent} from "./rco-registeration/rco-registeration.component";
import {ReceiptComponent} from "./receipt/receipt.component";
import {AgReportComponent} from "./ag-report/ag-report.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import { AddPdfComponent } from "./add-pdf/add-pdf.component";
import {AddNotificationComponent  } from "./add-notification/add-notification.component";




const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : 'feedback', component : FeedbackComponent},
  {path : 'contactus', component:ContactusComponent},
  {path : 'sitemap', component:SitemapComponent},
  {path : 'employees-vacancies', component:VacanciesComponent},
  {path : 'forms', component : FormsComponent},
  {path : 'training' , component : TrainingComponent},
  {path : 'notification' , component : NotificationComponent},
  {path : 'general' , component : GeneralComponent},
  {path : 'office' , component : OfficeComponent},
  {path : 'gazatte' , component : GazatteComponent},
  {path : 'pension' , component : PensionComponent},
  {path : 'pension-notification' , component : PensionNotificationComponent},
  {path : 'pao-notification' , component : PaoNotificationComponent},
  {path : 'letter' , component : LetterComponent},
  {path : 'DA-Enhancement' , component : DaComponent},
  {path : 'transfer-and-promotion',component : TransferComponent},
  {path : 'DDO-Registeration',component : DdoRegisterationComponent},
  {path : 'RCO-Registeration',component : RcoRegisterationComponent},
  {path : 'ExpenditureReceipt-Login',component : ReceiptComponent},
  {path : 'AG-Login' , component : AgReportComponent},
  {path:'Admin-Login',component:AdminLoginComponent},
  {path:'Admin-Dashboard',component:AdminDashboardComponent},
  {path:'New-Pdf',component:AddPdfComponent},
  {path:'New-Notification',component:AddNotificationComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
