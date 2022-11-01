import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtComponent } from './pages/art/art.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    BlogComponent,
    ContactMeComponent,
    HomeComponent,
    BlogCardComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
