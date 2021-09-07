import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    {
      path: "",
      component: AboutComponent,
    },
    {
      path: "service",
      component: ServicesComponent
    },
    {
      path: "contact",
      component: ContactComponent,
    },
    {
      path: "signin",
      component: SigninComponent,
    },
    {
      path: "signup",
      component: SignupComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
