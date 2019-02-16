import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AboutmePageComponent } from './aboutme-page/aboutme-page.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: HomePageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'aboutme', component: AboutmePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
