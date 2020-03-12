import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {NavbarComponent} from './navbar/navbar.component'
import {NavbarComponent} from './navbar/navbar.component'
import {HomeComponent} from './home/home.component'
import {FeedbackComponent} from './feedback/feedback.component'
import {ContactusComponent} from './contactus/contactus.component'
import {SitemapComponent} from './sitemap/sitemap.component'

const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : 'feedback', component : FeedbackComponent},
  {path : 'contactus', component:ContactusComponent},
  {path : 'sitemap', component:SitemapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
