import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* Componentes */
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/guest/header/header.component';
import { FooterComponent } from './components/guest/footer/footer.component';
import { BodyComponent } from './components/guest/body/body.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashmenuComponent } from './components/costumer/dashmenu/dashmenu.component';
import { MenuconfigComponent } from './components/costumer/menuconfig/menuconfig.component';
import { NavdashComponent } from './components/costumer/navdash/navdash.component';
import { BookingComponent } from './components/costumer/booking/booking.component';

/* Servicios */
import { DataService } from './services/data.service';
import { AuthGuard } from './services/auth.guard';
import { TokenService } from './services/token.service';
import { FindservicesComponent } from './components/costumer/findservices/findservices.component';
import { ServicesComponent } from './components/guest/services/services.component';

 export const router:Routes = [
  {path: '', component:HomeComponent}, //redirectTo, pathMatch
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/service', component: FindservicesComponent},
  {path: 'services', component: ServicesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    DashmenuComponent,
    MenuconfigComponent,
    NavdashComponent,
    BookingComponent,
    FindservicesComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [DataService, FormControl, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
