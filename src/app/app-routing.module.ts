import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ArtComponent } from './pages/art/art.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-me', component:  ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
