import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HistoryComponent } from './views/history/history.component';
import { HistoryDetailComponent } from './views/history-detail/history-detail.component';
import { LoginComponent } from './views/login/login.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogSingleComponent } from './views/blog-single/blog-single.component';
import { DestinationComponent } from './views/destination/destination.component';
import { DestinationDetailComponent } from './views/destination-detail/destination-detail.component';
import { ForgotpassComponent } from './views/forgotpass/forgotpass.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'history-detail', component: HistoryDetailComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-single', component: BlogSingleComponent},
  {path: 'destination', component: DestinationComponent},
  {path: 'destination-detail', component: DestinationDetailComponent},
  {path: 'forgot-pass', component: ForgotpassComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
