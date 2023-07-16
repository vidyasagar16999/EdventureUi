import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigateBarComponent } from './MilesUnfold/navigate-bar/navigate-bar.component';
import { FooterComponent } from './MilesUnfold/footer/footer.component';
import { ContactUsComponent } from './MilesUnfold/contact-us/contact-us.component';
import { FaqComponent } from './MilesUnfold/faq/faq.component';
import { AboutUsComponent } from './MilesUnfold/about-us/about-us.component';
import { HomepageComponent } from './MilesUnfold/homepage/homepage.component';
import { TripsServicesComponent } from './MilesUnfold/trips-services/trips-services.component';
import { GalleryComponent } from './MilesUnfold/gallery/gallery.component';
import { BlogResourceCenterComponent } from './MilesUnfold/blog-resource-center/blog-resource-center.component';
import { MissionStatementComponent } from './MilesUnfold/mission-statement/mission-statement.component';
import { TripDetailsComponent } from './MilesUnfold/trip-details/trip-details.component';
import { BlogDetailComponent } from './MilesUnfold/blog-detail/blog-detail.component';
import { PrivacyPolicyComponent } from './MilesUnfold/privacy-policy/privacy-policy.component';

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
    BlogResourceCenterComponent,
    MissionStatementComponent,
    TripDetailsComponent,
    BlogDetailComponent,
    PrivacyPolicyComponent
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
