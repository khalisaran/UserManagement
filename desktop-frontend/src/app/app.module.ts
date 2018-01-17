import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { ConfigService } from './config/config.service';
import { ApiService } from './config/api.service';
import { customHttpProvider } from './_helpers/custom-http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AuthService } from './login/auth.service';
import { AuthGuard } from '././login/auth.guard';
import { NounModule } from './noun/noun.module';
import { HeaderENComponent } from './header/header-en.component';
import { HeaderESComponent } from './header/header-es.component';
import { FooterENComponent } from './footer/footer-en.component';
import { FooterESComponent } from './footer/footer-es.component';
import { HomeENComponent } from './home/home-en.component';
import { HomeESComponent } from './home/home-es.component';
import { LoginComponent } from '././login/login.component';
import { AnalyticsModule } from './Analytics/analytics.module';
import { RoleModule } from './Analytics/Role/role.module';
import { UserModule } from './User/user.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]},
     { path: 'login', component: LoginComponent},


     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: '**', redirectTo: 'home', pathMatch: 'full'}


    ]),
NounModule,
AnalyticsModule,
RoleModule,
UserModule
  ],
  providers: [
  AuthService,
  AuthGuard,
    SharedService,
    ConfigService,
    ApiService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
HeaderESComponent,
FooterENComponent,
FooterESComponent,
HomeENComponent,
HomeESComponent,
LoginComponent
  ],
  entryComponents: [
    HeaderENComponent,
    HeaderESComponent,
    FooterENComponent,
    FooterESComponent,
    HomeENComponent,
    HomeESComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }