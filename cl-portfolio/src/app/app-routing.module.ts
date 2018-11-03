import { ContactComponent } from './views/contact/contact.component';
import { ProjectRoiComponent } from './views/project-roi/project-roi.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectAdaComponent } from './views/project-ada/project-ada.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'project-roi', component: ProjectRoiComponent},
  { path: 'ada-artistry', component: ProjectAdaComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about', component: HomeComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
