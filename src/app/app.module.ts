import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigateBarComponent } from './edventure/navigate-bar/navigate-bar.component';
import { FooterComponent } from './edventure/footer/footer.component';
import { ContactUsComponent } from './edventure/contact-us/contact-us.component';
import { FaqComponent } from './edventure/faq/faq.component';
import { AboutUsComponent } from './edventure/about-us/about-us.component';
import { HomepageComponent } from './edventure/homepage/homepage.component';
import { TripsServicesComponent } from './edventure/trips-services/trips-services.component';
import { GalleryComponent } from './edventure/gallery/gallery.component';
import { BlogResourceCenterComponent } from './edventure/blog-resource-center/blog-resource-center.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateBarComponent,
    FooterComponent,
    ContactUsComponent,
    FaqComponent,
    AboutUsComponent,
    HomepageComponent,
    TripsServicesComponent,
    GalleryComponent,
    BlogResourceCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
