import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './components/guard/auth.guard';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {Layout1Component} from './components/layout/layout1.component';
import {CarsComponent} from './components/cars/cars.component';
import {FormsComponent} from './components/forms/forms.component';
import {RequestComponent} from './components/request/request.component';
import {FileComponent} from './components/file/file.component';
import {Layout2Component} from './components/layout2/layout2.component';
import {ResumeComponent} from './components/resume/resume.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProfieleComponent} from './components/profiele/profiele.component';
import {CarInformationComponent} from './components/car-information/car-information.component';
import {CaruselComponent} from "./components/carusel/carusel.component";

const appRoutes: Routes = [
  {path: 'information/:foundCar', component: CarInformationComponent},
  {path: 'carusel', component: CaruselComponent},
  {path: 'profiele', component: ProfieleComponent, canActivate: [AuthGuard]},
  {path: 'free', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'layout1', component: Layout1Component},
  {path: 'cars', component: CarsComponent, canActivate: [AuthGuard]},
  {path: 'forms/:inputValuelog/:inputValuepas', component: FormsComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'request', component: RequestComponent, canActivate: [AuthGuard]},
  {path: 'file', component: FileComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/layout1', pathMatch: 'full'},
  // {path: '', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'layout2', component: Layout2Component, canActivate: [AuthGuard]},
  {path: 'shop', component: ResumeComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class Router {

}
