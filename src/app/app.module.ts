import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomeComponent} from './components/dashboard/home/home.component';
import {ContactUsComponent} from './components/dashboard/contact-us/contact-us.component';
import {ServicesComponent} from './components/dashboard/services/services.component'
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ReferenceComponent } from './components/dashboard/reference/reference.component';
import { BlogsComponent } from './components/dashboard/blogs/blogs.component';
import { PartnerComponent } from './components/dashboard/partner/partner.component';
import { WbnwComponent } from './components/dashboard/wbnw/wbnw.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ContactUsComponent,
    ServicesComponent,
    ReferenceComponent,
    BlogsComponent,
    PartnerComponent,
    WbnwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
