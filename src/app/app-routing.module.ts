import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './MilesUnfold/contact-us/contact-us.component';
import { FaqComponent } from './MilesUnfold/faq/faq.component';
import { AboutUsComponent } from './MilesUnfold/about-us/about-us.component';
import { HomepageComponent } from './MilesUnfold/homepage/homepage.component';
import { TripsServicesComponent } from './MilesUnfold/trips-services/trips-services.component';
import { GalleryComponent } from './MilesUnfold/gallery/gallery.component';
import { BlogResourceCenterComponent } from './MilesUnfold/blog-resource-center/blog-resource-center.component';
import { TripDetailsComponent } from './MilesUnfold/trip-details/trip-details.component';
import { BlogDetailComponent } from './MilesUnfold/blog-detail/blog-detail.component';
import { PrivacyPolicyComponent } from './MilesUnfold/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'contact-us', component: ContactUsComponent},
  { path:'faq', component: FaqComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'trips-services', component: TripsServicesComponent},
  { path:'gallery', component: GalleryComponent},
  { path:'blog', component: BlogResourceCenterComponent},
  { path: 'trip-detail/:id', component: TripDetailsComponent},
  { path: 'blog-detail/:id', component: BlogDetailComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
