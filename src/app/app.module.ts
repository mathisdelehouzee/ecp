import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileTabsComponent } from './profile-tabs/profile-tabs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';


const appRoutes: Routes = [
  { path: 'profile',component: ProfileTabsComponent , data: {title:'page title1'} }, // :id is a route parameter and data is to parse static data
  { path: 'accueil',component: AccueilComponent , data: {title:'page title2'} },
  { path: '', component: AccueilComponent} //  The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the 
   //                                      configuration. This is useful for displaying a "404 - Not Found" page or redirecting to another route. It MUST BE THE LAST ROUTE
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileTabsComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
