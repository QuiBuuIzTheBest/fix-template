import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HistoryComponent } from './views/history/history.component';
import { HistoryDetailComponent } from './views/history-detail/history-detail.component';
import { LoginComponent } from './views/login/login.component';
import { BlogSingleComponent } from './views/blog-single/blog-single.component';
import { BlogComponent } from './views/blog/blog.component';
import { DestinationComponent } from './views/destination/destination.component';
import { DestinationDetailComponent } from './views/destination-detail/destination-detail.component';
import { ForgotpassComponent } from './views/forgotpass/forgotpass.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    HistoryComponent,
    HistoryDetailComponent,
    LoginComponent,
    BlogSingleComponent,
    BlogComponent,
    DestinationComponent,
    DestinationDetailComponent,
    ForgotpassComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
