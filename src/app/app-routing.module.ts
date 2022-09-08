import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Exo1Component } from './exo1/exo1.component';
import { HomeComponent } from './home/home.component';
import { Demo2Component } from './demo/demo1/demo1.component';
import { Exo2Component } from './exo2/exo2.component';

const routes: Routes = [

  { path :'home', component : HomeComponent },
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'exo1', component : Exo1Component},
  {path : 'demo1' , component : Demo2Component},
  {path : 'exo2', component : Exo2Component}

  //{path : "" , redirectTo : "home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
