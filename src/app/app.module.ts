import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Exo1Component } from './exo1/exo1.component';
import { Demo2Component } from './demo/demo1/demo1.component';
import { Exo2Component } from './exo2/exo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Exo1Component,
    Demo2Component,
    Exo2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
