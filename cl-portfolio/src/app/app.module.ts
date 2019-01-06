import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectRoiComponent } from './views/project-roi/project-roi.component';
import { ProjectAdaComponent } from './views/project-ada/project-ada.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TwitterComponent } from './views/twitter/twitter.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './views/todolist/todolist.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectRoiComponent,
    ProjectAdaComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    SidebarComponent,
    TwitterComponent,
    TodolistComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ChildrenOutletContexts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
